import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import React, {useEffect, useState} from "react";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import { blueGrey} from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import {useNavigate} from 'react-router-dom';
import Fade from 'react-bootstrap/Fade';
import Collapse from 'react-bootstrap/Collapse'
import Segundo from '../PaginaDois/Segundo';
import axios from 'axios';
import "./styles10.css";
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';



function Inicial() {
    const navegar = useNavigate();
    const [ posts, setPosts ] = useState([])

  
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
    /*  {posts.map((post, key) => {

      
      })}

    function createData(status, number, title, responsible, area, hg) {
        return { status, number, title, responsible, area, hg};
      }
      
   
      

      const rows = [
      createData("", 1, "EWPK - Pintura Curitiba", "João Alves", "TI", 2),
      createData('Reprovado', 2, "DCP IOT", "José Ismael", "TI", 4),
      createData('Em atraso', 3, "EWPK - Armação Curitiba", "Sandro de Jesus", "TI", 3),
      createData('Concluído', 4, "EWPK - Montagem Curitiba", "Gabriel Silva", "TI", 0),
      createData('No prazo', 5, "EWPK - Finish Curitiba", "Joana Maria", "TI", 3),
      ];
 */
   return(

    <Container maxWidth="xL">
        <Stack direction="row-reverse" spacing={2}>
        </Stack>
        <h2 align="center">Roadmap de Inovações</h2>
    <Container maxWidth="xL">

        <div>
        <Grid container justifyContent="space-around" xs={3}>
            <Button size='large' color='success' variant='contained' align='left' onClick={() => navegar("/cadastro")}> + Novo</Button>

        </Grid>
      
        </div>
      

    <TableContainer component={Paper} sx={50}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" size='medium'>
        <TableHead>
          <TableRow>
            <TableCell align="center"></TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Number</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Responsible</TableCell>
            <TableCell align="center">Area</TableCell>
            <TableCell align="center">m@web</TableCell>
            <TableCell align="center">HG</TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((post, key) => (
            <TableRow>
              
              <VisibilityIcon className="Icone" align="center" color="action" />
              <TableCell align="center">{post.status}</TableCell>
              <TableCell align="center">{post.id}</TableCell>
              <TableCell align="center">{post.title}</TableCell>
              <TableCell align="center">{post.responsible}</TableCell>
              <TableCell align="center">{post.area}</TableCell>
              <TableCell align="center">{post.mweb}</TableCell>
              <TableCell align="center">{}</TableCell>
              <EditIcon className="Icone" align="center" color="info" onClick={() => navegar({pathname: `/edit/${post.id}` })} />
              <TableCell text-align="center">{}</TableCell>
              <DeleteIcon className="Icone" text-align="center" color="error" onClick={() => deletePost(post.id)} />
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
    </Container>

    
   );
  
   
   /*function hghg() {
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          click
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
            teste mensagem HG
          </div>
        </Collapse>
      </>
    );
  }
  
//  render(<hghg />);*/
}



export default Inicial;