import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, {useEffect, useState} from "react";
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import "../css/styles.css";
import "../css/estilo.css";
import "../css/default-css.css";
import "../css/font-awesome.min.css";
import "../css/themify-icons.css";
import { Dashboard, Visibility, Delete, Edit, Person, Home, Task, Block, Notifications, Mail, Settings} from '@mui/icons-material';



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

      function deletePost(id){

        axios.delete(`http://localhost:8080/inovacao/excluir/${id}`)

        setPosts(posts.filter(post => post.id !== id))
      }

   return(


<body>
    <div class="page-container">
        <div class="sidebar-menu">
            <div class="sidebar-header">
                <div class="logo">
                    <a><img src="https://logodownload.org/wp-content/uploads/2014/02/volkswagen-vw-logo-0.png" alt="logo" width="60px" height="60px"/></a>
                </div>
            </div>
            <div class="main-menu">
                <div class="menu-inner">
                    <nav>
                        {/* BARRA LATERAL*/}
                        <ul class="metismenu" id="menu">
                            <li class="active">
                                <a class="iconBar" onClick={() => navegar("/")} aria-expanded="true"><Home/><span>Inovações</span></a>
                            </li>
                            <li>
                                <a class="iconBar" onClick={() => navegar("/aceitas")} aria-expanded="true"><Task/><span>Inovações Aceitas</span></a>
                            </li>
                            <li>
                                <a class="iconBar" onClick={() => navegar("/recusadas")} aria-expanded="true"><Block/><span>Inovações Recusadas</span></a>
                            </li>
                            <li>
                                <a class="iconBar" onClick={() => navegar("/dashboards")} aria-expanded="true"><Dashboard/><span>Dashboard</span></a>
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
                                <input type="text" name="search" placeholder="Procurar..." required value={busca} onChange={(ev) => setBusca(ev.target.value)}/>
                                <i class="ti-search"></i>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-4 clearfix">
                        <ul class="notification-area pull-right">
                            <li class="dropdown">
                                <i data-toggle="dropdown">
                                    <Notifications/>
                                </i>
                            </li>
                            <li class="dropdown">
                                <i data-toggle="dropdown">
                                    <Mail/>
                                </i>
                            </li>
                            <li class="settings-btn">
                                <i>
                                    <Settings/>
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
                            <h4 class="page-title pull-left">Tabela de Inovações</h4>
                        </div>
                    </div>
                    <div class="col-sm-6 clearfix">
                        <div class="user-profile pull-right">
                            <img class="avatar user-thumb" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="avatar"/>
                            <h4 class="user-name dropdown-toggle" data-toggle="dropdown">User<i class="fa fa-angle-down"></i></h4>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Message</a>
                                <a class="dropdown-item" href="#">Settings</a>
                                <a class="dropdown-item" href="#">Log Out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-content-inner">
                <div class="card mt-5">
                    <div class="card-body">
                        <div class="d-flex justify-content-between mb-3">
                            <h4 class="header-title mb-0">Inovações em Andamento</h4>
                            <div class="botao">
                                <Button size='medium' color='success' variant='contained' onClick={() => navegar("/cadastro")}> + Novo</Button>
                            </div>
                        </div>
                        {/* TABELA*/}
                        <div id="tableRun">
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
                                        {/* Função por filtra busca no campo buscas :p*/}
                                        {posts.filter((post)=> {
                                           if (busca == "") {
                                            return post
                                           }  else if (post.responsible.toLowerCase().includes(busca.toLowerCase())){
                                                return post
                                            }  else if (post.area.toLowerCase().includes(busca.toLowerCase())){
                                                return post
                                            }  else if (post.title.toLowerCase().includes(busca.toLowerCase())){
                                                return post
                                        }} ).map((post, key) => (
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
                </div>
            </div>
        </div>
        <footer>
            <div class="footer-area">
                <p>© Copyright 2022. Todos os direitos reservados. Desenvolvido pela <a href="https://github.com/gabrielle-nunes/volkswagen-roadmap">Equipe Rômulo</a>.</p>
            </div>
        </footer>
    </div>
 </body>

); 

}

export default Inicial;