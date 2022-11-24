import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../css/styles.css";
import "../css/default-css.css";
import "../css/font-awesome.min.css";
import "../css/themify-icons.css";
import Modal from 'react-bootstrap/Modal';
import { Navbar, Jumbotron, Dropdown, DropdownButton } from 'react-bootstrap';
import { Dashboard, Visibility, Delete, Edit, Person, Home, Task, Block, Notifications, Mail, Settings, ArrowDropDown, AccountCircle } from '@mui/icons-material';


//INICIO TABELAS PERSONALIZADAS----------------->
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
//FIM TABELAS PERSONALIZADAS----------------->


//INICIO ICONES PERSONALIZADOS----------------->
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
    {<Settings />}
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



function Inicial() {
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

  function deletePost(id) {

    axios.delete(`http://localhost:8080/inovacao/excluir/${id}`)

    setPosts(posts.filter(post => post.id !== id))
  }

  function buscarInovacao(title) {

    axios.get(`http://localhost:8080/inovacao/searchTitle?title=${title}`)

    setBusca(posts.filter(post => post.startsWith(busca)))

  }

  return (


    <body>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
        crossorigin="anonymous"
      />

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
                  <li class="active">
                    <a class="iconBar" onClick={() => navegar("/")} aria-expanded="true"><Home /><span>Inovações</span></a>
                  </li>
                  <li>
                    <a class="iconBar" onClick={() => navegar("/aceitas")} aria-expanded="true"><Task /><span>Inovações Aceitas</span></a>
                  </li>
                  <li>
                    <a class="iconBar" onClick={() => navegar("/recusadas")} aria-expanded="true"><Block /><span>Inovações Recusadas</span></a>
                  </li>
                  <li>
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
                    <input type="text" name="search" placeholder="Procurar..." required value={busca} onChange={(ev) => setBusca(ev.target.value)} />
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
                  <h4 class="page-title pull-left">Tabela de Inovações</h4>
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
                        {posts.filter((post) => {
                          if (busca == "") {
                            return post
                          } else if (post.responsible.toLowerCase().includes(busca.toLowerCase())) {
                            return post
                          } else if (post.area.toLowerCase().includes(busca.toLowerCase())) {
                            return post
                          } else if (post.title.toLowerCase().includes(busca.toLowerCase())) {
                            return post
                          }
                        }).map((post, key) => (
                          <StyledTableRow>
                            <Visibility class="iconesInicial" onClick={() => navegar({pathname: `/visualizar/${post.id}` })} />
                            {/*onClick={() => navegar({ pathname: `/visualizar/${post.id}` })} */}
                            <StyledTableCell align="center">{post.status}</StyledTableCell>
                            <StyledTableCell align="center">{post.id}</StyledTableCell>
                            <StyledTableCell align="center">{post.title}</StyledTableCell>
                            <StyledTableCell align="center">{post.responsible}</StyledTableCell>
                            <StyledTableCell align="center">{post.area}</StyledTableCell>
                            <StyledTableCell align="center">{post.mweb}</StyledTableCell>
                            <StyledTableCell align="center">{ }</StyledTableCell>
                            <Edit class="iconesInicial" onClick={() => navegar({ pathname: `/edit/${post.id}` })} />
                            <TableCell class="iconesInicial" text-align="center">{ }</TableCell>
                            <Delete class="iconesInicial" onClick={() => deletePost(post.id)} />

                            {/*MODAL PARA DELETAR
                            <Modal
                              show={show}
                              onHide={handleClose}
                              backdrop="static"
                              keyboard={false}
                            >
                              <Modal.Header closeButton>
                                <Modal.Title>Apagar Inovação</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                Você realmente deseja excluir a Inovação?
                              </Modal.Body>
                              <Modal.Footer>
                                <Button color='success' onClick={handleClose}>
                                  Cancelar
                                </Button>
                                <Button color='success' onClick={() => deletePost(post.id)} >Excluir</Button>
                              </Modal.Footer>
                            </Modal>
                            */}

                            {/*MODAL PARA VISUALIZAR*/}
                            <Modal
                              show={show}
                              onHide={handleClose}
                              backdrop="static"
                              keyboard={true}
                              size='xl'
                            >
                              <Modal.Header closeButton>
                                <Modal.Title>Visualizar Inovação</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                <Form>
                                  <Row>
                                    <Col>
                                      <Form.Control placeholder="First name" />
                                    </Col>
                                    <Col>
                                      <Form.Control placeholder="Last name" />
                                    </Col>
                                    <Col>
                                      <Form.Control placeholder="Last name" />
                                    </Col>
                                    <Col>
                                      <Form.Control placeholder="Last name" />
                                    </Col>
                                    <Col>
                                      <Form.Control placeholder="Last name" />
                                    </Col>
                                    <Col>
                                      <Form.Control placeholder="Last name" disabled />
                                    </Col>
                                  </Row>
                                </Form>
                              {/*<Form.Control placeholder="Disabled input" disabled /> */}
                              </Modal.Body>
                              <Modal.Footer>
                                <Button className='main-content-inner' size='medium' color='warning' variant='contained' onClick={() => deletePost(post.id)} >Salvar em PDF</Button>
                                <Button size='medium' color='success' variant='contained' onClick={handleClose}>
                                  Fechar
                                </Button>
                              </Modal.Footer>
                            </Modal>
                          </StyledTableRow>


                        ))}


                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
                {/*FIM TABELA*/}
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
    </body >

  );

}

export default Inicial;