package br.com.roadmap.volkswagen.repository;

import br.com.roadmap.volkswagen.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
