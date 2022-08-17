import React, { Component }  from 'react';
import "../css/stylesCreate.css";
import Form from "react-bootstrap/Form";
import { useForm } from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import "../css/styleBar.css";
import { Dashboard, Visibility, Delete, Edit, Person, Home, ArrowDropDownCircle, Task, Block } from '@mui/icons-material';

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
      <header class="titulo">
        <h1>Titulo</h1>
        <a class="down" href="#section2"><ArrowDropDownCircle fontSize="large"/></a>
      </header>

      <main id="mainCreate">

      <Form onSubmit={handleSubmit(addPost)}>
        <div class="forms">
            <div class="selecao">
                <h5> Status</h5>      
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
              <h5>Staircase element</h5>
                <Form.Control type="text" placeholder="Staircase element" name="staircaseElement" {...register("staircaseElement")} />
              </Form.Group>
            </div>

            <div>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <h5>Responsable</h5>
              <Form.Control type="text" placeholder="Responsable" name="responsable" {...register("responsible")} />
              </Form.Group>
            </div>

            <div>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <h5>Area</h5>
              <Form.Control type="text" placeholder="Area" name="area" {...register("area")} />
              </Form.Group>
            </div>

            <div>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <h5>Nome of Measure</h5>
                <Form.Control type="text" placeholder="Nome of Measure" name="title" {...register("title")} />
                  <p> OU: VWB : CUR : VWB </p>
              </Form.Group>
            </div>

            <div class="texto">
                <h5>Actual State</h5>
                <Form.Control type="text" as="textarea" name="actualState" {...register("actualState")} rows={3} />
            </div>

            <div class="texto">
                <h5>Targer state with measure description</h5>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                <Form.Control as="textarea" rows={3} name="targetState" {...register("targetState")} />
                </Form.Group>
            </div>

            <div class="texto">
                <h5>Calculation/Explication</h5>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} name="calculationExplication" {...register("calculationExplication")} />
                </Form.Group>
            </div>

              <div class="selecao">
                <h5>Handlungsfeld</h5>
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
                <h5>Ganhos Previstos:</h5>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                <Form.Control as="textarea" rows={3} name="ganhosPrevistos" {...register("ganhosPrevistos")}/>
                </Form.Group>
              </div>


              <div class="texto" id="section2">
                  <h5>Recursos Necessários:</h5>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                  <Form.Control as="textarea" rows={3} name="recursosNecessarios" {...register("recursosNecessarios")} />
                </Form.Group>
              </div>

              <div>
                  <h5>Time de Trabalho:</h5>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                  <Form.Control as="textarea" rows={3} name="timeTrabalho" {...register("timeTrabalho")} />
                  </Form.Group>
              </div>

              <div>
                <h5>Parcerias Necessárias:</h5>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                <Form.Control as="textarea" rows={3} name="parceriasNecessarias" {...register("parceriasNecessarias")} />
                </Form.Group>
              </div>

              <div>
              <h5 id="section2">Pontos de Escalação:</h5>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                <Form.Control as="textarea" rows={3} name="pontosEscalacao" {...register("pontosEscalacao")} />
                </Form.Group>
              </div>

              <div>
                <h5>Divulgação:</h5>
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
      </section>

      <footer>

      </footer>
  </body>
</html>
  )
}

export default Segundo;