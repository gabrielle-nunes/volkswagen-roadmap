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

function Inicial() {
    const navegar = useNavigate();
    function createData(status, number, title, responsible, area, hg) {
        return { status, number, title, responsible, area, hg};
      }
      
      const rows = [
        createData('No prazo', 1, "EWPK - Pintura Curitiba", "João Alves", "TI", 2),
        createData('Reprovado', 2, "DCP IOT", "José Ismael", "TI", 4),
        createData('Em atraso', 3, "EWPK - Armação Curitiba", "Sandro de Jesus", "TI", 3),
        createData('Concluído', 4, "EWPK - Montagem Curitiba", "Gabriel Silva", "TI", 0),
        createData('No prazo', 5, "EWPK - Finish Curitiba", "Joana Maria", "TI", 3),
      ];
 
   return(

    <Container maxWidth="xL">
        <Stack direction="row-reverse" spacing={2}>
            <Avatar sx={{ bgcolor: blueGrey[200] }} align="right">GN</Avatar>
        </Stack>
        <h2 align="center">Roadmap de Inovações</h2>
    <Container maxWidth="xL">

        <div>
        <Grid container justifyContent="space-around" xs={3}>
            <Button size='large' color='success' variant='contained' align='left' onClick={() => navegar("/cadastro")}> + Novo</Button>
            <Button size='large' color='primary' variant='contained' align='right'> Visualizar</Button>
        </Grid>
      
        </div>
      

    <TableContainer component={Paper} sx={50}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" size='medium'>
        <TableHead>
          <TableRow>
            <TableCell align="center">Select</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Number</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Responsible</TableCell>
            <TableCell align="left">Area</TableCell>
            <TableCell align="left">HG</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }} role="checkbox" hover><Checkbox/>
              <TableCell component="th" scope="row">{row.status}</TableCell>
              <TableCell align="left">{row.number}</TableCell>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="left">{row.responsible}</TableCell>
              <TableCell align="left">{row.area}</TableCell>
              <TableCell align="left">{row.hg}</TableCell>
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