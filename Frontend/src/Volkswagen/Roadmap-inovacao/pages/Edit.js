import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useForm } from 'react-hook-form';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import "../css/styleBar.css";



function Edit() {

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

 
  const addPut = data => axios.put(`http://localhost:8080/inovacao/editar/${id}`, data)
  .then(() =>  {
      console.log("Deu certo")
      navegar("/")
})
.catch(() => {
      console.log("Deu errado")

})
  //render()
  //{
  return (
    <main>

      <div className="row">

        <Form onSubmit={handleSubmit(addPut)}>

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
              <button type="submit" class="btn btn-primary" name="submit" {...register("submit")}> Atualizar </button>
              <button type="button" class="btn btn-danger" onClick={() => navegar("/")}>Cancelar</button>
              
            </div>
          </div>
          </div>

        </Form>
      </div>
    </main>

  )

}

export default Edit;