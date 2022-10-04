//package br.com.roadmap.volkswagen.controller;
//
//import br.com.roadmap.volkswagen.dto.ArquivoDTO;
//import br.com.roadmap.volkswagen.dto.InovacaoDTO;
//import br.com.roadmap.volkswagen.entities.Arquivo;
//import br.com.roadmap.volkswagen.service.ArquivoService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.transaction.annotation.Transactional;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.util.UUID;
//
//@RestController
//@RequestMapping("/inovacao/imagem")
//public class ArquivoController {
//
//
//    @Autowired
//    ArquivoService arquivoService;
//
////    @Autowired
////    ArquivoRepository arquivoRepo;
////    		arquivoRepo.sav;
//
//    @PostMapping("/file")
//    @Transactional
//    public ArquivoDTO salvarImagemController(@RequestBody ArquivoDTO arquivoDTO, @RequestParam("file") MultipartFile file) throws Exception {
//        return arquivoService.salvarImagem(arquivoDTO, file);
//    }
//
//    @GetMapping("/imagem")
//    public ResponseEntity<Arquivo>buscarImagemController(@PathVariable UUID uuid) throws Exception{
//        return arquivoService.buscarImagem(uuid);
//    }
//
//
//}
