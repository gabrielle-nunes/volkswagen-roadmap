//package br.com.roadmap.volkswagen.repository;
//
//import br.com.roadmap.volkswagen.entities.Arquivo;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;
//
//import java.util.Optional;
//import java.util.UUID;
//
//public interface ArquivoRepository extends JpaRepository<Arquivo, UUID> {
//    @Query("SELECT arquivo FROM Arquivo arquivo WHERE arquivo.uuid =:uuid")
//    Optional<Arquivo> findByUuid(@Param("uuid") UUID uuid);
//
//    /*    @Query("SELECT usuario FROM Usuario usuario WHERE usuario.cpf =:cpf")
//    Usuario findByCpf(@Param("cpf") String cpf);*/
//}
