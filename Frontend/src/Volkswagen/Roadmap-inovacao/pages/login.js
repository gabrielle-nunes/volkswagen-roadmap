import React, {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function Login() {
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
                        <h4>ENTRAR</h4>
                        <p>Olá, entre por aqui para visualizar as inovações!</p>
                    </div>
                    <div class="login-form-body">
                        <div class="form-gp">
                            <label for="exampleInputEmail1">Email</label>
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
                        <div class="row mb-4 rmber-area">
                            <div class="col-6">
                                <div class="custom-control custom-checkbox mr-sm-2">
                                    <input type="checkbox" class="custom-control-input" id="customControlAutosizing"/>
                                    <label class="custom-control-label" for="customControlAutosizing">Lembrar-se</label>
                                </div>
                            </div>
                            <div class="col-6 text-right">
                                <a href="#">Esqueceu a senha?</a>
                            </div>
                        </div>
                        <div class="submit-btn-area">
                            <button id="form_submit" type="submit">Entrar <i class="ti-arrow-right"></i></button>
                        </div>
                        <div class="form-footer text-center mt-5">
                            <p class="text-muted">Não tem uma conta? <a href="register.html">Cadastre-se!</a></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</html>
  )
}

export default Login;