package br.com.roadmap.volkswagen.repository;

import br.com.roadmap.volkswagen.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, Long> {

    @Query("SELECT user FROM User user WHERE user.cpf =:cpf")
    User findByCpf(@Param("cpf") String cpf);
}
