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
import axios from 'axios';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';



/*const schema = yup.object({
  staircase: yup.string().required(),
})*/



function Segundo(posts) {
  
  console.log(posts)

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
function createData(rpsv, dt,stts, hg) {
  return { rpsv, dt,stts, hg};
}
const rows = [
  createData("Rafael", "09/03/2022", "ok", 'HG2'),
  createData('Alan', "13/04/2022", "Em andamento", 'HG4'),
  createData('Leonardo', "30/05/2022", "ok", 'HG3'),
  createData('Felipe', "03/06/2022", "Em andamento", 'HG0'),
  createData('Lucas', "13/06/2022", "Em andamentp", 'HG3'),
  ];

  return (



    <main>

      <h4>
      <Button size='small' color='success'  align='left' onClick={() => navegar("/menu")}> Voltar</Button>
      </h4>

      <div className="row">

        <Form onSubmit={handleSubmit(addPost)}>

          <div className="titulo" class="cool">
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


          <div className="fml-dados" class="cool">
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


          <div className="fml-escrito" class="cool">
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
         
      <h7 class ="container">
        <div  >
        <Form.Group className="rspv" controlId="rspv">
                <Form.Label>Insira o nome do Responsavel</Form.Label>
                <Form.Control type="text" placeholder="Nome do Responsavel" name="rspv" {...register("Rafael Langue")} />
              
        </Form.Group>
        <Form.Group className="data" controlId="dt">
                <Form.Label>Insira a data da reunião</Form.Label>
                <Form.Control type="text" placeholder="Data da Reunião" name="dt" {...register("09/06/2022")} />
              
        </Form.Group>
        <Form.Group className="hg" controlId="hg">
                <Form.Label>Insira qual o numero HG se encontra a inovação</Form.Label>
                <Form.Control type="int" placeholder="HG" name="hg" {...register("HG2")} />
              
        </Form.Group>
        <Form.Group className="stts" controlId="stts">
                <Form.Label>Insira qual o Status da Inovação</Form.Label>
                <Form.Control type="int" placeholder="Status da Inovação" name="stts" {...register("stts")} />
              
        </Form.Group>

        </div>
        <div></div>
        
      
        
          <TableContainer component={Paper} size = '250px' align="center">
            <Table sx={{ minWidth: 100 }} aria-label="simple table">

              <TableBody>
              
              {rows.map((row) => (
            <TableRow
             key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }} role="checkbox" hover>
              <TableCell component="th" scope="row">{row.status}</TableCell>
              <TableCell align="left">{row.hg} <div>{row.dt}</div>{row.rpsv}</TableCell>
              <TableCell align="left">{row.stts}</TableCell>
            </TableRow>
          ))}
   
              </TableBody>
            </Table>
          </TableContainer>
      </h7>

          <div className='btn-post'>
            <div className="col-sm-3">
              <button type="submit" class="btn btn-primary" name="submit" {...register("submit")}> Cadastrar </button>
              <button type="button" class="btn btn-danger" onClick={() => navegar("/*")}>Cancelar</button>
              
            </div>
          </div>

          <div className="fml-gastos" class="cool">
            <div className="col-sm-10">

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                <Form.Label>Ganhos Previstos:      R$:</Form.Label>
                <Form.Control as="textarea" rows={6} name="ganhos" {...register("ganhosPrevistos")}/>
                
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
      <div>
      
      </div>
    </main>

  )

}

export default Segundo;