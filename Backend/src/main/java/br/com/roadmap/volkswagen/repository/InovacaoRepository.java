package br.com.roadmap.volkswagen.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.roadmap.volkswagen.entities.Inovacao;

@Repository
public interface InovacaoRepository extends JpaRepository<Inovacao, Long> {

	List<Inovacao> findByStatus(String status);

	@Query(nativeQuery = true, value = "select * from tbl_inovacao u where u.status = 'Escalação' OR u.status = 'No prazo' OR u.status = 'Em atraso'")
	List<Inovacao> findByStatusEquals(String status);

}
