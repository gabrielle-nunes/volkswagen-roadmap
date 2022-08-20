import React, {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import "../css/stylesDashboard.css";
import "../css/styleBar.css";
import ReactECharts from 'echarts-for-react';  // or var ReactECharts = require('echarts-for-react');

import { Dashboard, Visibility, Delete, Edit, Person, Home,Task, Block } from '@mui/icons-material';


function Dashboards() {
    const navegar = useNavigate();
    const [ posts, setPosts ] = useState([])

  
    useEffect(() => {
        axios.get("http://localhost:8080/inovacao/lista")
        .then((response) => {
            setPosts(response.data)
        })

        .catch(() => {
            console.log("Deu errado")
        })

      }, [])

      function deletePost(id){

        axios.delete(`http://localhost:8080/inovacao/excluir/${id}`)

        setPosts(posts.filter(post => post.id !== id))
      }

      //GRÁFICOS
      const option = {
        title: {
          text: 'Referer of a Website',
          subtext: 'Fake Data',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };

   return(




    

<body>
  <main id="mainDashboard">
    <div class ="navigation">
          <ul>
            <li class="imagem">
              <img src="https://logodownload.org/wp-content/uploads/2014/02/volkswagen-vw-logo-0.png" alt="logo" height="60px" width="60px"/>
            </li>
            <li class="item">
              <a onClick={() => navegar("/")}>
                <span class="icon"><span><Home/></span></span>
                <span class="title">Home</span>
              </a>
            </li>
            <li class="item">
              <a onClick={() => navegar("/dashboards")}>
                <span class="icon"><span><Dashboard/></span></span>
                <span class="title">Dashboard</span>
              </a>
            </li>
            <li class="item">
              <a>
                <span class="icon"><span><Task/></span></span>
                <span class="title">Accepted</span>
              </a>
            </li>
            <li class="item">
              <a>
                <span class="icon"><span><Block/></span></span>
                <span class="title">Refused</span>
              </a>
            </li>
          </ul>
      </div>
      <div class="barUser">
        <span class="userIcon"><Person/></span>
      </div>
  
  
    <section>
      <div>
        <h5 class="tituloDashboard">Gráficos</h5>
      </div>
        <div class ="chart">
          <div class="chart1">
            <ReactECharts option={option} />
          </div>
          <div class="chart2">
            <ReactECharts option={option} />
          </div>
        </div>
    </section>
  </main>
</body>
   );
  
   
   

}



export default Dashboards;