package br.com.roadmap.volkswagen.entities;

import br.com.roadmap.volkswagen.dto.UserDTO;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "tbl_user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @NotBlank
    private String user;
    @NotBlank(message = "Mínimo 5 caracteres")
    @Size(min = 5)
    private String senha;
    @Email
    private Email email;
    @ManyToOne
    @JoinColumn(name = "setor_id")
    private Setor setor;

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

    public Email getEmail() {
        return email;
    }

    public void setEmail(Email email) {
        this.email = email;
    }

    public Setor getSetor() {
        return setor;
    }

    public void setSetor(Setor setor) {
        this.setor = setor;
    }

    public static User convert(UserDTO userDTO) throws Exception {
        User user = new User();
        user.setUser(userDTO.getUser());
        user.setSenha(userDTO.getSenha());
        user.setEmail(userDTO.getEmail());
        return user;
    }


}

