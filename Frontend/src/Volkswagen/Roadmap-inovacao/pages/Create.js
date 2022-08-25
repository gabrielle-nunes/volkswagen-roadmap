import Form from "react-bootstrap/Form";
import { useForm} from 'react-hook-form';
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import "../css/styles.css";
import "../css/default-css.css";
import "../css/font-awesome.min.css";
import "../css/themify-icons.css";
import { Dashboard, Visibility, Delete, Person, Home, Task, Block, Notifications, Mail, Settings} from '@mui/icons-material';



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
                                <input type="text" name="search" placeholder="Procurar..." required/>
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
                            <h4 class="header-title mb-0">Criar Inovação</h4>
                        </div>
                        {/* TABELA*/}
                          <div id="mainCreate">
                              <Form onSubmit={handleSubmit(addPost)}>
                                <div class="forms">
                                    <div class="selecao">
                                        <h5 class="infoTitutlo"> Status</h5>      
                                        <Form.Select aria-label="Default select example" type="text" name="status" {...register("status")}>
                                          <option>Escalação</option>
                                          <option>No prazo</option>
                                          <option>Em atraso</option>
                                          <option>Concluído</option>
                                          <option>Reprovado</option>
                                        </Form.Select>
                                    </div>
                        
                                    <div>
                                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                      <h5 class="infoTitutlo">Staircase element</h5>
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
                                          <p> OU: VWB : CUR : VWB </p>
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
                                        <h5  id="section2" class="infoTitutlo">Divulgação:</h5>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                                        <Form.Control as="textarea" rows={3} name="divulgacao" {...register("divulgacao")} />
                                        </Form.Group>
                                      </div>
                        
                                      <div>
                                        <button id="butao" type="submit" class="btn btn-primary" name="submit" {...register("submit")}> Salvar </button>
                                        
                                        <button type="button" class="btn btn-danger" onClick={() => navegar("/")}>Cancelar</button>
                                      </div> 
                                </div>
                              </Form>
                        </div>
                        {/* FIM TABELA*/}
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

export default Segundo;