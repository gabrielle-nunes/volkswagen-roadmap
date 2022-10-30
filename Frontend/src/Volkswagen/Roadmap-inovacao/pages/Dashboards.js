import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReactECharts from 'echarts-for-react';  // or var ReactECharts = require('echarts-for-react');
import "../css/styles.css";
import "../css/default-css.css";
import "../css/font-awesome.min.css";
import "../css/themify-icons.css";
import { Navbar, Jumbotron, Dropdown, DropdownButton } from 'react-bootstrap';
import { Dashboard, Visibility, Delete, Edit, Person, Home, Task, Block, Notifications, Mail, Settings, ArrowDropDown, AccountCircle } from '@mui/icons-material';

//INICIO ICONES PERSONALIZADOS----------------->
var dadus = ""
var idDado = [];
var nomeDado = [];
var criadorDado = [];
var setorDado = [];

var aidDado = [];
var anomeDado = [];
var acriadorDado = [];
var asetorDado = [];

var option;

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
        href='@mui/icons-material'
        ref={ref}
        onClick={e => {
            e.preventDefault();
            onClick(e);
        }}
    >
        <Mail />
        {children}
    </a>
));

const CustomToggleB = React.forwardRef(({ children, onClick }, ref) => (
    <a
        href='@mui/icons-material'
        ref={ref}
        onClick={e => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {<Notifications />}
        {children}
    </a>
));

const CustomToggleC = React.forwardRef(({ children, onClick }, ref) => (
    <a
        href='@mui/icons-material'
        ref={ref}
        onClick={e => {
            e.preventDefault();
            onClick(e);
        }}
    >
        <AccountCircle />
        {children}
    </a>
));

//FIM ICONES PERSONALIZADOS----------------->

function Dashboards() {
    const navegar = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [posts, setPosts] = useState([])
    const [busca, setBusca] = useState('')



    console.log(busca);


    useEffect(() => {
        axios.get("http://localhost:8080/inovacao/lista")
            .then((response) => {
                setPosts(response.data)

            })

            .catch(() => {
                console.log("Deu errado")
            })
    }, [])



    axios.get("http://localhost:8080/inovacao/lista")
        .then((response) => {
            dadus = (response.data)
            return dadus
        })


    console.log(dadus)


    function deletePost(id) {

        axios.delete(`http://localhost:8080/inovacao/excluir/${id}`)

        setPosts(posts.filter(post => post.id !== id))
    }

    function buscarInovacao(title) {

        axios.get(`http://localhost:8080/inovacao/searchTitle?title=${title}`)

        setBusca(posts.filter(post => post.startsWith(busca)))

    }

    //criando arrays dos valores json
    for (var i = 0; i < dadus.length; i++) {
        console.log(dadus[i]["id"]);

        idDado += (dadus[i]["id"]) + "-"
        aidDado = idDado.split('-')

        nomeDado += (dadus[i]["title"]) + "-"
        anomeDado = nomeDado.split('-')

        criadorDado += (dadus[i]["responsible"]) + "-"
        acriadorDado = criadorDado.split('-')

        setorDado += (dadus[i]["area"]) + "-"
        asetorDado = setorDado.split('-')


    }

    var counts = {};
    asetorDado.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    var filtrarTI = (counts["TI"]);
    var filtrarSerie = (counts["Plan. De Série"]);
    console.log(filtrarTI)


    option = {
        title: {
            text: 'Inovações por Área',
            subtext: 'Dados atuais',
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
                    { value: filtrarTI, name: 'TI' },
                    { value: filtrarSerie, name: 'Plan. De Série' },
                    { value: 1, name: 'Fábrica Piloto' },
                    { value: 1, name: 'Manutenção Site' },
                    { value: 1, name: 'Estamparia' },
                    { value: 1, name: 'Armação' },
                    { value: 1, name: 'Pintura' },
                    { value: 1, name: 'Montagem Final' },
                    { value: 1, name: 'VW Componentes' },
                    { value: 1, name: 'QA Processos' },
                    { value: 1, name: 'Eng. Industrial' },
                    { value: 1, name: 'Logística' },
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

    return (

        <body>
            <div class="page-container">
                <div class="sidebar-menu">
                    <div class="sidebar-header">
                        <div class="logo">
                            <a><img src="https://logodownload.org/wp-content/uploads/2014/02/volkswagen-vw-logo-0.png" alt="logo" width="60px" height="60px" /></a>
                        </div>
                    </div>
                    <div class="main-menu">
                        <div class="menu-inner">
                            <nav>
                                {/* BARRA LATERAL*/}
                                <ul class="metismenu" id="menu">
                                    <li>
                                        <a class="iconBar" onClick={() => navegar("/")} aria-expanded="true"><Home /><span>Inovações</span></a>
                                    </li>
                                    <li>
                                        <a class="iconBar" onClick={() => navegar("/aceitas")} aria-expanded="true"><Task /><span>Inovações Aceitas</span></a>
                                    </li>
                                    <li>
                                        <a class="iconBar" onClick={() => navegar("/recusadas")} aria-expanded="true"><Block /><span>Inovações Recusadas</span></a>
                                    </li>
                                    <li class="active">
                                        <a class="iconBar" onClick={() => navegar("/dashboards")} aria-expanded="true"><Dashboard /><span>Dashboard</span></a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="main-content">
                    <div class="header-area">
                        <div class="row align-items-center">
                            <div class="col-md-6 col-sm-8 clearfix">
                                <div class="search-box pull-left">
                                    <form action="#">
                                        <input type="text" name="search" value={busca} placeholder="Procurar..." required onChange={(ev) => setBusca(ev.target.value)} />
                                        <i class="ti-search"></i>
                                    </form>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-4 clearfix">
                                <ul class="notification-area pull-right">
                                    <li class="dropdown">
                                        <i data-toggle="dropdown">
                                            <Dropdown>
                                                <Dropdown.Toggle as={CustomToggleB} menuVariant='dark' id="dropdown-custom-components">
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                                                    <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                                                    <Dropdown.Item eventKey="3" active>Orange</Dropdown.Item>
                                                    <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </i>
                                    </li>
                                    <li class="dropdown">
                                        <i data-toggle="dropdown">
                                            <Dropdown>
                                                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                                                    <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                                                    <Dropdown.Item eventKey="3" active>Orange</Dropdown.Item>
                                                    <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </i>
                                    </li>
                                    <li class="settings-btn">
                                        <i>
                                            <Dropdown>
                                                <Dropdown.Toggle as={CustomToggleC} id="dropdown-custom-components">
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item eventKey="1">Configurações</Dropdown.Item>
                                                    <Dropdown.Item eventKey="2">Sair</Dropdown.Item>
                                                    <Dropdown.Item eventKey="3" active>Orange</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="page-title-area">
                        <div class="row align-items-center">
                            <div class="col-sm-6">
                                <div class="breadcrumbs-area clearfix">
                                    <h4 class="page-title pull-left">Gráficos Relativos a Inovações</h4>
                                </div>
                            </div>
                            <div class="col-sm-6 clearfix">
                                <div class="user-profile pull-right">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main-content-inner">
                        <div class="card mt-5">
                            <div class="card-body">
                                <div class="d-flex justify-content-between mb-3">
                                    <h4 class="header-title mb-0">Gráficos Relativos a Inovações</h4>
                                </div>
                                {/* Gráficos*/}
                                <div class="chart">
                                    <div class="chart1">
                                        <ReactECharts option={option} />
                                    </div>
                                    <div class="chart2">

                                    </div>
                                </div>
                                {/* Fim gráficos*/}
                            </div>
                        </div>


                    </div>
                </div>
                <footer>
                    <div class="footer-area">
                        <p>© Copyright 2022. Todos os direitos reservados. Desenvolvido pela <a href="https://github.com/gabrielle-nunes/volkswagen-roadmap">Equipe Roadmap de Inovação</a>.</p>
                    </div>
                </footer>
            </div>
        </body>

    );

}

export default Dashboards;