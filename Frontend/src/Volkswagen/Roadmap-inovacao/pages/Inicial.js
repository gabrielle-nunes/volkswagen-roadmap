import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import React, {useEffect, useState} from "react";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import "../css/stylesInicial.css";
import "../css/styleBar.css";
import { pink } from '@mui/material/colors';

import { Dashboard, Visibility, Delete, Edit, Person, Home, Task, Block  } from '@mui/icons-material';





const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




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
      <div>
        <h2 class="nomeInicio">Tabela de inovações</h2>
        <div id="tableRun">
              <div class="botao">
              <Button size='medium' color='success' variant='contained' onClick={() => navegar("/cadastro")}> + Novo</Button>
              </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 600 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center">Status</StyledTableCell>
                  <StyledTableCell align="center">Number</StyledTableCell>
                  <StyledTableCell align="center">Title</StyledTableCell>
                  <StyledTableCell align="center">Responsible</StyledTableCell>
                  <StyledTableCell align="center">Area</StyledTableCell>
                  <StyledTableCell align="center">m@web</StyledTableCell>
                  <StyledTableCell align="center">HG</StyledTableCell>
                  <StyledTableCell align="left"></StyledTableCell>
                  <StyledTableCell align="left"></StyledTableCell>
                  <StyledTableCell align="left"></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {posts.map((post, key) => (
                  <StyledTableRow>
                    <Visibility class="iconesInicial" onClick={() => navegar({pathname: `/visualizar/${post.id}` })} />
                    <StyledTableCell align="center">{post.status}</StyledTableCell>
                    <StyledTableCell align="center">{post.id}</StyledTableCell>
                    <StyledTableCell align="center">{post.title}</StyledTableCell>
                    <StyledTableCell align="center">{post.responsible}</StyledTableCell>
                    <StyledTableCell align="center">{post.area}</StyledTableCell>
                    <StyledTableCell align="center">{post.mweb}</StyledTableCell>
                    <StyledTableCell align="center">{}</StyledTableCell>
                    <Edit class="iconesInicial" onClick={() => navegar({pathname: `/edit/${post.id}` })} />
                    <TableCell class="iconesInicial" text-align="center">{}</TableCell>
                    <Delete class="iconesInicial" onClick={() => deletePost(post.id)} />
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        </div>
        </section>
    </main>
</body>
   );
  
   

}



export default Inicial;