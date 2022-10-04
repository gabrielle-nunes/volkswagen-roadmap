//package br.com.roadmap.volkswagen.service;
//
//import br.com.roadmap.volkswagen.controller.ArquivoController;
//import br.com.roadmap.volkswagen.dto.ArquivoDTO;
//import br.com.roadmap.volkswagen.entities.Arquivo;
//import br.com.roadmap.volkswagen.entities.Inovacao;
//import br.com.roadmap.volkswagen.repository.ArquivoRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Service;
//
//import org.springframework.web.multipart.MultipartFile;
//
//import java.io.IOException;
//import java.nio.file.Files;
//import java.nio.file.Path;
//import java.nio.file.Paths;
//import java.util.Optional;
//import java.util.UUID;
//
//@Service
//public class ArquivoService {
//
//    @Autowired
//    ArquivoController arquivoController;
//
//    @Autowired
//    ArquivoRepository arquivoRepo;
//
//    private static String caminhoFile = "C:/Users/andre/Postman/files";
//
//    public ArquivoDTO salvarImagem(ArquivoDTO arquivoDTO, MultipartFile file) throws Exception {
//        Arquivo arquivo = null;
//        try {/*caso a imagem/caminho nao exista*/
//            if (!file.isEmpty()) {
//                byte[] arrayImagem = file.getBytes();
//                Path caminho = Paths.get(caminhoFile + String.valueOf(arquivoDTO.getUuidImagem()) + file.getOriginalFilename());/*Salvar Caminho Com nomeCompleto da img*/
//                Files.write((java.nio.file.Path) caminho, arrayImagem);
//
//                arquivoDTO.setImagem((String.valueOf(arquivoDTO.getUuidImagem()) + file.getOriginalFilename()).getBytes()); /*So salvar o caminho da img*/
//            }
//            arquivo = arquivoRepo.save(Arquivo.convert(arquivoDTO));
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//        return ArquivoDTO.convert(arquivo);
//    }
//
//    public ResponseEntity<Arquivo> buscarImagem(UUID uuid){
//        Optional<Arquivo> arquivo = arquivoRepo.findByUuid(uuid);
//
//        if (arquivo.isPresent())
//            return new ResponseEntity<Arquivo>(arquivo.get(), HttpStatus.OK);
//        else
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//    }
//}
