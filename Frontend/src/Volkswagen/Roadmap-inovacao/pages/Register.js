import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import React, {useEffect, useState} from "react";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import "../css/stylesInicial.css";
import "../css/styleBar.css";
import "../css/styles copy.css"
import { Dashboard, Visibility, Delete, Edit, Person, Home, Task, Block  } from '@mui/icons-material';

function Register() {
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

   return(

<html lang="pt-br">
<div class="login-area login-s2">
        <div class="container">
            <div class="login-box ptb--100">
                <form>
                    <div class="login-form-head">
                        <h4>REGISTRO</h4>
                        <p>Olá, efetue seu Registro por aqui!</p>
                    </div>
                    <div class="login-form-body">
                        <div class="form-gp">
                            <label for="exampleInputName1">Nome completo</label>
                            <input type="text" id="exampleInputName1"/>
                            <i class="ti-user"></i>
                            <div class="text-danger"></div>
                        </div>
                        <div class="form-gp">
                            <label for="exampleInputEmail1">Endereço de email</label>
                            <input type="email" id="exampleInputEmail1"/>
                            <i class="ti-email"></i>
                            <div class="text-danger"></div>
                        </div>
                        <div class="form-gp">
                            <label for="exampleInputPassword1">Senha</label>
                            <input type="password" id="exampleInputPassword1"/>
                            <i class="ti-lock"></i>
                            <div class="text-danger"></div>
                        </div>
                        <div class="form-gp">
                            <label for="exampleInputPassword2">Confirmar senha</label>
                            <input type="password" id="exampleInputPassword2"/>
                            <i class="ti-lock"></i>
                            <div class="text-danger"></div>
                        </div>
                        <div class="submit-btn-area">
                            <button id="form_submit" type="submit">Cadastrar <i class="ti-arrow-right"></i></button>
                        </div>
                        <div class="form-footer text-center mt-5">
                            <p class="text-muted">Já tem uma conta? <a href="login.html">Entre!</a></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</html>
  )
}

export default Register;