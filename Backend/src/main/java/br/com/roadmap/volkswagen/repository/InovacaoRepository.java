package br.com.roadmap.volkswagen.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.roadmap.volkswagen.entities.Inovacao;

@Repository

public interface InovacaoRepository extends JpaRepository<Inovacao, Long> {

	List<Inovacao> findByStatus(String status);

	@Query(nativeQuery = true, value = "select * from tbl_inovacao u where u.status = 'Escalação' OR u.status = 'No prazo' OR u.status = 'Em atraso'")
	List<Inovacao> findByStatusEquals(String status);

	@Query(value = "select inovacao from Inovacao inovacao where inovacao.title like %?1%")
	List<Inovacao> searchByTitle(String title);

	@Query(value = "select inovacao from Inovacao inovacao where inovacao.responsible like %?1%")
	List<Inovacao> searchByResponsible(String responsible);

	@Query(value = "select inovacao from Inovacao inovacao where inovacao.setor like %?1%")
	List<Inovacao> searchBySetor(String setor);

	@Query(value = "select inovacao from Inovacao inovacao where inovacao.status like %:status%")
	List<Inovacao> searchByStatus(@Param("status")String status);

	@Query(value = "select inovacao from Inovacao inovacao where inovacao.pontosEscalacao like %?1%")
	List<Inovacao> searchByPontosEscalacao(String pontosEscalacao);

	@Query(value = "select inovacao from Inovacao inovacao where inovacao.timeTrabalho like %?1%")
	List<Inovacao> searchByTimeTrabalho(String timeTrabalho);

}
