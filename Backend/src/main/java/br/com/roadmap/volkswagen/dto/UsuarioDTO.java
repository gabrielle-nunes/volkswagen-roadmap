package br.com.roadmap.volkswagen.dto;

import br.com.roadmap.volkswagen.entities.Inovacao;
import br.com.roadmap.volkswagen.entities.Usuario;

import javax.validation.constraints.Email;

public class UsuarioDTO {

    private String nome;
    private String senha;
    private Email email;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public Email getEmail() {
        return email;
    }

    public void setEmail(Email email) {
        this.email = email;
    }

    public static UsuarioDTO convert(Usuario usuario) throws Exception {
        UsuarioDTO usuarioDTO = new UsuarioDTO();
            usuarioDTO.setNome(usuario.getNome());
            usuarioDTO.setSenha(usuario.getSenha());
            usuarioDTO.setEmail(usuario.getEmail());
        return usuarioDTO;
    }
}
