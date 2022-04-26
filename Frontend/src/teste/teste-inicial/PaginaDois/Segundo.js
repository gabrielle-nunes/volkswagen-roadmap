//import "./styles.css";
import React from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

class Segundo extends React.Component{
  
    constructor(props){
      super(props);

      this.state = {
        projeto : []
      }
    }

    componentDidMount(){
      this.buscarProjeto();
      }

    componentWillUnmount(){

    }

    buscarProjeto = () => {
        fetch("URL PARA O GET")
      .then(resposta => resposta.json)
      .then(dados => {
        this.setState({ projeto : dados })

    })
  }
                    //TABELA DE VISUALIZAÇÃO
    /* render() {   
      return (
        <Table striped bordered hover>
            <thead>
              <tr>
                  <th>Staircase element</th>
                  <th>Responsable</th>
                  <th>Name of Measure</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Rômulo</td>
                    <td>Mauricio</td>
                    <td>Roadmap Volks</td>    
                
                </tr>
            </tbody>
        </Table>
      )
    } */
    render()
    {
      return(
        <div>
          <Form.Select aria-label="Default select example">
  <option>Status</option>
  <option value="0">Concluido</option>
  <option value="1">No Prazo</option>
  <option value="2">Em atraso</option>
  <option value="3">Escalação</option>
  <option value="4">Reprovado</option>

</Form.Select>
          
          
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Staircase element</Form.Label>
              <Form.Control type="text" placeholder="Staircase element" />
              <Form.Label>Responsable</Form.Label>
              <Form.Control type="text" placeholder="Responsable" />
              <Form.Label>Nome of Measure</Form.Label>
              <Form.Control type="text" placeholder="Nome of Measure" />
                  <div> OU: VWB : CUR : VWB </div>
                  
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                     <Form.Label>Actual state</Form.Label>
                     <Form.Control as="textarea" rows={5} />

                     </Form.Group>
                     <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                     <Form.Label>Targer state with measure description</Form.Label>
                     <Form.Control as="textarea" rows={5} />

                     </Form.Group>
                     <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                     <Form.Label>Calculation/Explication</Form.Label>
                     <Form.Control as="textarea" rows={5} />
</Form.Group>
</Form>

<ButtonGroup aria-label="Basic example">
  <Button variant="success">HG 1</Button>
  <Button variant="success">HG 2</Button>
  <Button variant="success">HG 3</Button>
  <Button variant="info">HG 4</Button>
  <Button variant="info">HG 5</Button>
</ButtonGroup>
</div>)
    }
  } 
export default Segundo;