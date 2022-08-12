package br.com.roadmap.volkswagen.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.roadmap.volkswagen.dto.InovacaoDTO;
import br.com.roadmap.volkswagen.entities.Inovacao;

@Repository
public interface InovacaoRepository extends JpaRepository<Inovacao, Long>{
	
	Optional<Inovacao> findByTitle (String title);
	
}
