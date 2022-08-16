package br.com.roadmap.volkswagen.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.roadmap.volkswagen.entities.Inovacao;

import java.util.List;
import java.util.Optional;

@Repository
public interface InovacaoRepository extends JpaRepository<Inovacao, Long>{

    Optional<Inovacao> findByTitle (String title);

    @Query(value = "select inovacao from Inovacao inovacao where inovacao.title like %?1%")
    List<Inovacao> searchByTitle(String title);

    @Query(value = "select inovacao from Inovacao inovacao where inovacao.responsible like %?1%")
    List<Inovacao> searchByResponsible(String responsible);

    @Query(value = "select inovacao from Inovacao inovacao where inovacao.area like %?1%")
    List<Inovacao> searchByArea(String area);

    @Query(value = "select inovacao from Inovacao inovacao where inovacao.status like %?1%")
    List<Inovacao> searchByStatus(String status);

    @Query(value = "select inovacao from Inovacao inovacao where inovacao.pontosEscalacao like %?1%")
    List<Inovacao> searchByPontosEscalacao(String pontosEscalacao);


    @Query(value = "select inovacao from Inovacao inovacao where inovacao.timeTrabalho like %?1%")
    List<Inovacao> searchByTimeTrabalho(String timeTrabalho);

}

