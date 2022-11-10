package br.com.roadmap.volkswagen.dto;

import br.com.roadmap.volkswagen.entities.Usuario;

public class UsuarioDTO {
    private String nome;
    private String cpf;
    private String senha;
    private String email;


    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public static UsuarioDTO convert(Usuario usuario) throws Exception {
        UsuarioDTO usuarioDTO = new UsuarioDTO();
        usuarioDTO.setNome(usuario.getNome());
        usuarioDTO.setCpf(usuario.getCpf());
        usuarioDTO.setSenha(usuario.getSenha());
        usuarioDTO.setEmail(usuario.getEmail());
        return usuarioDTO;
    }
}