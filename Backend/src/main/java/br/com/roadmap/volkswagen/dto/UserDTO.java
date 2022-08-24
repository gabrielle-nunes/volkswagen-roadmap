package br.com.roadmap.volkswagen.dto;

import br.com.roadmap.volkswagen.entities.User;
import org.hibernate.validator.constraints.br.CPF;

//import javax.validation.constraints.Email;

public class UserDTO{
    private String user;
    private String cpf;
    private String senha;
//    private Email email;


    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

//    public Email getEmail() {
//        return email;
//    }
//
//    public void setEmail(Email email) {
//        this.email = email;
//    }

    public static UserDTO convert(User user) throws Exception {
        UserDTO userDTO = new UserDTO();
        userDTO.setUser(user.getUser());
        userDTO.setCpf(user.getCpf());
        userDTO.setSenha(user.getSenha());
//        userDTO.setEmail(user.getEmail());
        return userDTO;
    }
}