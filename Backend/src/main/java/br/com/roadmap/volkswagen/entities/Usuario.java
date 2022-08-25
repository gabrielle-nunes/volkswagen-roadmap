package br.com.roadmap.volkswagen.entities;

import br.com.roadmap.volkswagen.dto.UsuarioDTO;
import org.hibernate.validator.constraints.br.CPF;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "tbl_usuario")
public class Usuario {
    @Column(name = "nome")
    private String nome;

    @Id
    @CPF
    @NotBlank(message = "CPF Obrigatório")
    private String cpf;

    @NotBlank(message = "Mínimo 5 caracteres")
    @Size(min = 5)
    private String senha;

    @Email
    private String email;

    @ManyToOne
    @JoinColumn(name = "setor_id")
    private Setor setor;

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

    public Setor getSetor() {
        return setor;
    }

    public void setSetor(Setor setor) {
        this.setor = setor;
    }

    public static Usuario convert(UsuarioDTO usuarioDTO) throws Exception {
        Usuario usuario = new Usuario();
        usuario.setNome(usuarioDTO.getNome());
        usuario.setCpf(usuarioDTO.getCpf());
        usuario.setSenha(usuarioDTO.getSenha());
        usuario.setEmail(usuarioDTO.getEmail());
        return usuario;
    }


}

