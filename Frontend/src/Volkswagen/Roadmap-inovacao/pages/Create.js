import React, { Component }  from 'react';
import "../css/stylesCreate.css";
import Popover from '@mui/material/Popover';
import Form from "react-bootstrap/Form";
import { useForm } from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import "../css/styleBar.css";
import { Dashboard, Visibility, Delete, Edit, Person, Home, ArrowDropDownCircle, Task, Block, QuestionMark } from '@mui/icons-material';
import Button from '@mui/material/Button';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Typography from '@mui/material/Typography';

function Segundo() {

  const navegar = useNavigate();

  const { register, handleSubmit, formState:{ errors } } = useForm({
     //resolver: yupResolver(schema),
  });

  const addPost = data => axios.post("http://localhost:8080/inovacao/cadastro", data)
  .then(() =>  {
      console.log("Deu certo")
      navegar("/")
})
.catch(() => {
      console.log("Deu errado")

})


return (

<html lang="pt-br">
<head>
</head>
  <body id="body">
  <div class="page-container">
    <div class="sidebar-menu">
            <div class="sidebar-header">
                <div class="logo">
                    <a href="index.html"><img src="https://logodownload.org/wp-content/uploads/2014/02/volkswagen-vw-logo-0.png" alt="logo" height="45px" width="45px"/></a>
                </div>
            </div>
            <div class="main-menu">
                <div class="menu-inner">
                    <nav>
                        <ul class="metismenu" id="menu">
                            <li>
                                <a onClick={() => navegar("/")}><span><Home/></span><span class="title">Home</span></a>
                            </li>
                            <li>
                                <a onClick={() => navegar("/dashboards")}><span><Dashboard/></span><span class="title">Dashboard</span></a>
                            </li>
                            <li>
                                <a onClick={() => navegar("/aceitos")} class="title"><span><Task/></span><span>Accepted</span></a>
                            </li>
                            <li>
                                <a onClick={() => navegar("/recusados")} class="title"><span><Block/></span><span>Refused</span></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
      <div class="header-area">
                <div class="row align-items-center">

                    <div class="col-md-6 col-sm-8 clearfix">
                        <div class="search-box pull-left">
                            <form action="#">
                                <input type="text" name="search" placeholder="Search..." required/>
                                <i class="ti-search"></i>
                            </form>
                        </div>
                    </div>

                    <div class="col-md-6 col-sm-4 clearfix">
                        <ul class="notification-area pull-right">
                            <li id="full-view"><i class="ti-fullscreen"></i></li>
                            <li id="full-view-exit"><i class="ti-zoom-out"></i></li>
                            <li class="dropdown">
                                <i class="ti-bell dropdown-toggle" data-toggle="dropdown">
                                    <span>2</span>
                                </i>
                                <div class="dropdown-menu bell-notify-box notify-box">
                                    <span class="notify-title">You have 3 new notifications <a href="#">view all</a></span>
                                    <div class="nofity-list">
                                        <a href="#" class="notify-item">
                                            <div class="notify-thumb"><i class="ti-key btn-danger"></i></div>
                                            <div class="notify-text">
                                                <p>You have Changed Your Password</p>
                                                <span>Just Now</span>
                                            </div>
                                        </a>
                                        <a href="#" class="notify-item">
                                            <div class="notify-thumb"><i class="ti-comments-smiley btn-info"></i></div>
                                            <div class="notify-text">
                                                <p>New Commetns On Post</p>
                                                <span>30 Seconds ago</span>
                                            </div>
                                        </a>
                                        <a href="#" class="notify-item">
                                            <div class="notify-thumb"><i class="ti-key btn-primary"></i></div>
                                            <div class="notify-text">
                                                <p>Some special like you</p>
                                                <span>Just Now</span>
                                            </div>
                                        </a>
                                        <a href="#" class="notify-item">
                                            <div class="notify-thumb"><i class="ti-comments-smiley btn-info"></i></div>
                                            <div class="notify-text">
                                                <p>New Commetns On Post</p>
                                                <span>30 Seconds ago</span>
                                            </div>
                                        </a>
                                        <a href="#" class="notify-item">
                                            <div class="notify-thumb"><i class="ti-key btn-primary"></i></div>
                                            <div class="notify-text">
                                                <p>Some special like you</p>
                                                <span>Just Now</span>
                                            </div>
                                        </a>
                                        <a href="#" class="notify-item">
                                            <div class="notify-thumb"><i class="ti-key btn-danger"></i></div>
                                            <div class="notify-text">
                                                <p>You have Changed Your Password</p>
                                                <span>Just Now</span>
                                            </div>
                                        </a>
                                        <a href="#" class="notify-item">
                                            <div class="notify-thumb"><i class="ti-key btn-danger"></i></div>
                                            <div class="notify-text">
                                                <p>You have Changed Your Password</p>
                                                <span>Just Now</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li class="dropdown">
                                <i class="fa fa-envelope-o dropdown-toggle" data-toggle="dropdown"><span>3</span></i>
                                <div class="dropdown-menu notify-box nt-enveloper-box">
                                    <span class="notify-title">You have 3 new notifications <a href="#">view all</a></span>
                                    <div class="nofity-list">
                                        <a href="#" class="notify-item">
                                            <div class="notify-thumb">
                                                <img src="assets/images/author/author-img1.jpg" alt="image"/>
                                            </div>
                                            <div class="notify-text">
                                                <p>Aglae Mayer</p>
                                                <span class="msg">Hey I am waiting for you...</span>
                                                <span>3:15 PM</span>
                                            </div>
                                        </a>
                                        <a href="#" class="notify-item">
                                            <div class="notify-thumb">
                                                <img src="assets/images/author/author-img2.jpg" alt="image"/>
                                            </div>
                                            <div class="notify-text">
                                                <p>Aglae Mayer</p>
                                                <span class="msg">When you can connect with me...</span>
                                                <span>3:15 PM</span>
                                            </div>
                                        </a>
                                        <a href="#" class="notify-item">
                                            <div class="notify-thumb">
                                                <img src="assets/images/author/author-img3.jpg" alt="image"/>
                                            </div>
                                            <div class="notify-text">
                                                <p>Aglae Mayer</p>
                                                <span class="msg">I missed you so much...</span>
                                                <span>3:15 PM</span>
                                            </div>
                                        </a>
                                        <a href="#" class="notify-item">
                                            <div class="notify-thumb">
                                                <img src="assets/images/author/author-img4.jpg" alt="image"/>
                                            </div>
                                            <div class="notify-text">
                                                <p>Aglae Mayer</p>
                                                <span class="msg">Your product is completely Ready...</span>
                                                <span>3:15 PM</span>
                                            </div>
                                        </a>
                                        <a href="#" class="notify-item">
                                            <div class="notify-thumb">
                                                <img src="assets/images/author/author-img2.jpg" alt="image"/>
                                            </div>
                                            <div class="notify-text">
                                                <p>Aglae Mayer</p>
                                                <span class="msg">Hey I am waiting for you...</span>
                                                <span>3:15 PM</span>
                                            </div>
                                        </a>
                                        <a href="#" class="notify-item">
                                            <div class="notify-thumb">
                                                <img src="assets/images/author/author-img1.jpg" alt="image"/>
                                            </div>
                                            <div class="notify-text">
                                                <p>Aglae Mayer</p>
                                                <span class="msg">Hey I am waiting for you...</span>
                                                <span>3:15 PM</span>
                                            </div>
                                        </a>
                                        <a href="#" class="notify-item">
                                            <div class="notify-thumb">
                                                <img src="assets/images/author/author-img3.jpg" alt="image"/>
                                            </div>
                                            <div class="notify-text">
                                                <p>Aglae Mayer</p>
                                                <span class="msg">Hey I am waiting for you...</span>
                                                <span>3:15 PM</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li class="settings-btn">
                                <i class="ti-settings"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
  <div class="barUser">
        <span class="userIcon"><Person/></span>
      </div>
      <header class="titulo">
        <h1>Titulo</h1>
        <a class="down" href="#section2"><ArrowDropDownCircle fontSize="large"/></a>
      </header>

      <main id="mainCreate">

      <Form onSubmit={handleSubmit(addPost)}>
        <div class="forms">
            <div class="formulario">
                <h5 class="infoTitutlo"> Status </h5>      
                <PopupState variant="popover" popupId="demo-popup-popover">
                  {(popupState) => (
                    <span class="interrogacao">
                      <QuestionMark variant="contained" {...bindTrigger(popupState)}>
                        Open Popover
                      </QuestionMark>
                      <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        transformOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                      >
                        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                      </Popover>
                    </span>
                  )}
                </PopupState>
                <Form.Select aria-label="Default select example" type="text" name="status" {...register("status")}>
                  <option>Escalação</option>
                  <option>No prazo</option>
                  <option>Em atraso</option>
                  <option>Concluído</option>
                  <option>Reprovado</option>
                </Form.Select>
            </div>

            <div class="formulario">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <h5 class="infoTitutlo">Staircase element</h5> 
                    <PopupState variant="popover" popupId="demo-popup-popover">
                      {(popupState) => (
                        <span class="interrogacao">
                          <QuestionMark variant="contained" {...bindTrigger(popupState)}>
                            Open Popover
                          </QuestionMark>
                          <Popover
                            {...bindPopover(popupState)}
                            anchorOrigin={{
                              vertical: 'top',
                              horizontal: 'right',
                            }}
                            transformOrigin={{
                              vertical: 'bottom',
                              horizontal: 'left',
                            }}
                          >
                            <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                          </Popover>
                        </span>
                      )}
                    </PopupState>
                <Form.Control type="text" placeholder="Staircase element" name="staircaseElement" {...register("staircaseElement")} />
              </Form.Group>
            </div>

            <div>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <h5 class="infoTitutlo">Responsable</h5>
              <Form.Control type="text" placeholder="Responsable" name="responsable" {...register("responsible")} />
              </Form.Group>
            </div>

            <div>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <h5 class="infoTitutlo">Area</h5>
              <Form.Control type="text" placeholder="Area" name="area" {...register("area")} />
              </Form.Group>
            </div>

            <div>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <h5 class="infoTitutlo">Nome of Measure</h5>
                <Form.Control type="text" placeholder="Nome of Measure" name="title" {...register("title")} />
                  <p class="infoTitutlo"> OU: VWB : CUR : VWB </p>
              </Form.Group>
            </div>

            <div class="texto">
                <h5 class="infoTitutlo">Actual State</h5>
                <Form.Control type="text" as="textarea" name="actualState" {...register("actualState")} rows={3} />
            </div>

            <div class="texto">
                <h5 class="infoTitutlo">Targer state with measure description</h5>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                <Form.Control as="textarea" rows={3} name="targetState" {...register("targetState")} />
                </Form.Group>
            </div>

            <div class="texto">
                <h5 class="infoTitutlo">Calculation/Explication</h5>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} name="calculationExplication" {...register("calculationExplication")} />
                </Form.Group>
            </div>

              <div class="selecao">
                <h5 class="infoTitutlo">Handlungsfeld</h5>
                  <select class="form-select" aria-label="Default select example" type="text" name="handlungsfeld" {...register("handlungsfeld")}>
                    <option selected></option>
                    <option>SGK</option>
                    <option>Ramp-up Excellence</option>
                    <option>Low-Expenditure Factories of the Future</option>
                    <option>Stable Customer Order Process</option>
                    <option>Team of the Future</option>
                    <option>Sustainable Structures</option>
                    <option>Produtivity</option>
                    <option>Rework-free Products and Processes</option>
                    <option>Zero Impact Factory</option>
                  </select>
              </div>


              <div class="texto">
                <h5 class="infoTitutlo">Ganhos Previstos:</h5>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                <Form.Control as="textarea" rows={3} name="ganhosPrevistos" {...register("ganhosPrevistos")}/>
                </Form.Group>
              </div>


              <div class="texto" id="section2">
                  <h5 class="infoTitutlo">Recursos Necessários:</h5>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                  <Form.Control as="textarea" rows={3} name="recursosNecessarios" {...register("recursosNecessarios")} />
                </Form.Group>
              </div>

              <div>
                  <h5 class="infoTitutlo">Time de Trabalho:</h5>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                  <Form.Control as="textarea" rows={3} name="timeTrabalho" {...register("timeTrabalho")} />
                  </Form.Group>
              </div>

              <div>
                <h5 class="infoTitutlo">Parcerias Necessárias:</h5>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                <Form.Control as="textarea" rows={3} name="parceriasNecessarias" {...register("parceriasNecessarias")} />
                </Form.Group>
              </div>

              <div>
              <h5 class="infoTitutlo">Pontos de Escalação:</h5>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                <Form.Control as="textarea" rows={3} name="pontosEscalacao" {...register("pontosEscalacao")} />
                </Form.Group>
              </div>

              <div>
                <h5 class="infoTitutlo"  id="section2">Divulgação:</h5>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                <Form.Control as="textarea" rows={3} name="divulgacao" {...register("divulgacao")} />
                </Form.Group>
              </div>

              <div>
                <button id="butao" type="submit" class="btn btn-primary" name="submit" {...register("submit")}> Cadastrar </button>
                
                <button type="button" class="btn btn-danger" onClick={() => navegar("/")}>Cancelar</button>
              </div> 
        </div>
      </Form>
      </main>
      </div>
  </body>
</html>
  )
}

export default Segundo;