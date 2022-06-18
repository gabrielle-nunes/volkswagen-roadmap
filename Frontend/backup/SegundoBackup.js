//import "./styles.css";
import React from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import {useNavigate} from 'react-router-dom';


/*const schema = yup.object({
  staircase: yup.string().required(),
})*/

function Segundo() {
  
  const navegar = useNavigate();

  const { register, handleSubmit, formState:{ errors } } = useForm({
     //resolver: yupResolver(schema),
  });

  const addPost = data => console.log(data)
  //render()
  //{
  return (

    <main>

      <div className="row">

        <Form onSubmit={handleSubmit(addPost)}>

          <div className="titulo">
            <div className="col-sm-6">
              <h1> PU CURITIBA</h1>
              <h2>Innovation Roadmap</h2>
            </div>
          </div>

          <div className="btn-status">
            <div className="col-sm-2">


              <Form.Select aria-label="Default select example" type="text" name="status" {...register("status")}>
                
                <option>-</option>
                <option value="0">Concluido</option>
                <option value="1">No Prazo</option>
                <option value="2">Em atraso</option>
                <option value="3">Escalação</option>
                <option value="4">Reprovado</option>
              </Form.Select>
            </div>
          </div>


          <div className="fml-dados">
            <div className="col-sm-3">

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Staircase element</Form.Label>
                <Form.Control type="text" placeholder="Staircase element" name="staircase" {...register("staircase")} />
                <Form.Label>Responsable</Form.Label>
                <Form.Control type="text" placeholder="Responsable" name="responsable" {...register("responsible")} />
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

          <div className="btn-hg">
            <h2 className="txt-hg">Status HG</h2>
            <ButtonGroup aria-label="Basic example" name="statusHG" {...register("statusHG")}>
         
              <Button variant="success">HG 1</Button>
              <Button variant="success">HG 2</Button>
              <Button variant="success">HG 3</Button>
              <Button variant="success">HG 4</Button>
              <Button variant="success">HG 5</Button>
            </ButtonGroup>
          </div>

          <div className='btn-post'>
            <div className="col-sm-3">
              <button type="submit" class="btn btn-primary" name="submit" {...register("submit")}> Cadastrar </button>
              <button type="button" class="btn btn-danger" onClick={() => navegar("/")}>Cancelar</button>
              
            </div>
          </div>

          <div className="fml-gastos">
            <div className="col-sm-10">

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

            </div>
          </div>

        </Form>
      </div>
    </main>

  )

}

export default Segundo;