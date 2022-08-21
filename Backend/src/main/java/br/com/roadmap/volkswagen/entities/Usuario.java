package br.com.roadmap.volkswagen.entities;

import br.com.roadmap.volkswagen.dto.InovacaoDTO;
import br.com.roadmap.volkswagen.dto.UsuarioDTO;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "tbl_usuario")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @NotBlank
    private String nome;
    @NotBlank(message = "Mínimo 5 caracteres")
    @Size(min = 5)
    private String senha;
    @Email
    private Email email;
    @ManyToOne
    @JoinColumn(name = "setor_id")
    private Setor setor;

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

    public Setor getSetor() {
        return setor;
    }

    public static Usuario convert(UsuarioDTO usuarioDTO) throws Exception {
        Usuario usuario = new Usuario();
            usuario.setNome(usuarioDTO.getNome());
            usuario.setSenha(usuarioDTO.getSenha());
            usuario.setEmail(usuarioDTO.getEmail());
        return usuario;
    }
}
