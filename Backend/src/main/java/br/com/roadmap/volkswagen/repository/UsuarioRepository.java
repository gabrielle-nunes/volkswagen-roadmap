package br.com.roadmap.volkswagen.repository;

import br.com.roadmap.volkswagen.entities.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    @Query("SELECT usuario FROM Usuario usuario WHERE usuario.cpf =:cpf")
    Usuario findByCpf(@Param("cpf") String cpf);
}
