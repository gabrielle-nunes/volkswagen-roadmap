import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import TextField from '@mui/material/TextField';



/*const schema = yup.object({
  staircase: yup.string().required(),
})*/

function Visualizar() {

  const { id } = useParams()

  const navegar = useNavigate();

  const { register, handleSubmit, formState:{ errors }, reset } = useForm({
    //resolver: yupResolver(schema),
 });

  useEffect(() => {
      axios.get(`http://localhost:8080/inovacao/lista/${id}`)
      .then((response) => {
        reset(response.data)
      })
  }, []) 

 
  /*const addPut = data => axios.put(`http://localhost:8080/inovacao/editar/${id}`, data)
  .then(() =>  {
      console.log("Deu certo")
      navegar("/")
})
.catch(() => {
      console.log("Deu errado")

})*/
  //render()
  //{
<<<<<<< Updated upstream
  return (

    <main>

      <div className="row">

        <Form onSubmit={handleSubmit()}>

          <div className="titulo">
            <div className="col-sm-6">
              <h1> PU CURITIBA</h1>
              <h2>Innovation Roadmap</h2>
            </div>
          </div>

          <div className="mweb"> 
          <TextField id="mweb" label="M-NR:" variant="standard" type="number" name="mweb" {...register("mweb")} />
          </div>

          <div className="btn-status">
            <div className="col-sm-2">

            
            <h6> Status
              <Form.Select aria-label="Default select example" type="text" name="status" {...register("status")}>
                <option>Escalação</option>
                <option>No prazo</option>
                <option>Em atraso</option>
                <option>Concluído</option>
                <option>Reprovado</option>
                </Form.Select>
              </h6>
            </div>
          </div>

         


          <div className="fml-dados">
            <div className="col-sm-3">

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Staircase element</Form.Label>
                <Form.Control type="text" placeholder="Staircase element" name="staircase" {...register("staircase")} />
                <Form.Label>Responsable</Form.Label>
                <Form.Control type="text" placeholder="Responsable" name="responsable" {...register("responsible")} />
                <Form.Label>Area</Form.Label>
                <Form.Control type="text" placeholder="Area" name="area" {...register("area")} />
                <Form.Label>Nome of Measure</Form.Label>
                <Form.Control type="text" placeholder="Nome of Measure" name="status" {...register("title")} />
                <h2 class="txt-desc"> OU: VWB : CUR : VWB </h2>

              </Form.Group>

            </div>
          </div>


          <div className="fml-escrito">
            <div className="col-sm-3">

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                <Form.Label>Actual state</Form.Label>
                <Form.Control type="text" as="textarea" name="actualstate" {...register("actualstate")} rows={3} />
            
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                <Form.Label>Targer state with measure description</Form.Label>
                <Form.Control as="textarea" rows={3} name="target" {...register("target")} />
           
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Calculation/Explication</Form.Label>
                <Form.Control as="textarea" rows={3} name="calculation" {...register("calculation")} />
              
              </Form.Group>

            </div>
          </div>

          <div className="Handlu">
            <div className="col-sm-3">
            <h6> Handlungsfeld 
            <select class="form-select" aria-label="Default select example" type="text" name="handlu" {...register("handlu")}>
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
        </h6>
      </div>
    </div>


         

         

          <div className="fml-gastos">
          

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                <Form.Label>Ganhos Previstos:      R$:</Form.Label>
                <Form.Control as="textarea" rows={3} name="ganhos" {...register("ganhosPrevistos")}/>
                
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                <Form.Label>Recursos Necessários:      R$:</Form.Label>
                <Form.Control as="textarea" rows={3} name="recursos" {...register("recursosNecessarios")} />
                
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                <Form.Label>Time de Trabalho:</Form.Label>
                <Form.Control as="textarea" rows={3} name="time" {...register("timeTrabalho")} />
               
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                <Form.Label>Parcerias Necessárias:</Form.Label>
                <Form.Control as="textarea" rows={3} name="parceria" {...register("parceriaNecessarias")} />
              
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                <Form.Label>Pontos de Escalação:</Form.Label>
                <Form.Control as="textarea" rows={3} name="escalacao" {...register("pontosEscalacao")} />
               
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                <Form.Label>Divulgação:</Form.Label>
                <Form.Control as="textarea" rows={3} name="divulgacao" {...register("divulgacao")} />
                
              </Form.Group>

           
            <div className='btn-post'>
            <div className="col-sm-3">
              <button type="button" class="btn btn-danger" onClick={() => navegar("/")}>Voltar</button>
              
            </div>
          </div>
          </div>

        </Form>
      </div>
    </main>

  )

}

export default Visualizar;
=======
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
      
            <Form onSubmit={handleSubmit()}>
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
                      <h5 id="section2" class="infoTitutlo">Divulgação:</h5>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                      <Form.Control as="textarea" rows={3} name="divulgacao" {...register("divulgacao")} />
                      </Form.Group>
                    </div>
      
                    <div>                      
                      <button type="button" class="btn btn-danger" onClick={() => navegar("/")}>Voltar</button>
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
      
      export default Visualizar;
>>>>>>> Stashed changes
