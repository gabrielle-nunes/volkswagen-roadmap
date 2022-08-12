import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import React, {useEffect, useState} from "react";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import "../css/stylesInicial.css";
import "../css/styleBar.css";

import { Dashboard, Visibility, Delete, Edit, Person, Home, Task, Block  } from '@mui/icons-material';












function Inicial() {
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

   return(


<body>
  <main>
  <section>
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
                <span class="icon"><span><Person/></span></span>
                <span class="title">Account</span>
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
        <div id="tableRun">
          <Container maxWidth="xL">
              <Stack direction="row-reverse" spacing={2}>
              </Stack>
              <h2 align="center">Roadmap de Inovações</h2>
          <Container maxWidth="xL">
              <div class="botao">
              <Grid>
                  <Button size='medium' color='success' variant='contained' onClick={() => navegar("/cadastro")}> + Novo</Button>
              </Grid>
              </div>
          <TableContainer component={Paper} sx={50}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table" size='medium'>
              <TableHead>
                <TableRow>
                  <TableCell align="center"></TableCell>
                  <TableCell align="center">Status</TableCell>
                  <TableCell align="center">Number</TableCell>
                  <TableCell align="center">Title</TableCell>
                  <TableCell align="center">Responsible</TableCell>
                  <TableCell align="center">Area</TableCell>
                  <TableCell align="center">m@web</TableCell>
                  <TableCell align="center">HG</TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {posts.map((post, key) => (
                  <TableRow>
                    <Visibility className="Iconen" onClick={() => navegar({pathname: `/visualizar/${post.id}` })} />
                    <TableCell align="center">{post.status}</TableCell>
                    <TableCell align="center">{post.id}</TableCell>
                    <TableCell align="center">{post.title}</TableCell>
                    <TableCell align="center">{post.responsible}</TableCell>
                    <TableCell align="center">{post.area}</TableCell>
                    <TableCell align="center">{post.mweb}</TableCell>
                    <TableCell align="center">{}</TableCell>
                    <Edit className="Iconen" align="center" color="info" onClick={() => navegar({pathname: `/edit/${post.id}` })} />
                    <TableCell text-align="center">{}</TableCell>
                    <Delete className="Icone" text-align="center" color="error" onClick={() => deletePost(post.id)} />
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </Container>
          </Container>
        </div>
        </section>
    </main>
</body>
   );
  
   

}



export default Inicial;