package br.com.roadmap.volkswagen.controller;

import java.io.IOException;
//import java.nio.file.Files;
//import java.nio.file.Paths;
//import java.nio.file.Path;
import java.util.List;

import javax.transaction.Transactional;

//import br.com.roadmap.volkswagen.entities.Hg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.com.roadmap.volkswagen.dto.InovacaoDTO;
import br.com.roadmap.volkswagen.entities.Inovacao;
import br.com.roadmap.volkswagen.service.InovacaoService;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/inovacao")
public class InovacaoController {

	@Autowired
	private InovacaoService inovacaoService;

	@PostMapping("/cadastro")
	@Transactional
	public InovacaoDTO cadastrarInovacaoController(@RequestBody InovacaoDTO inovacaoDTO, @RequestParam("file") MultipartFile file) throws Exception {

		/*caso a imagem/caminho nao exista*/
//				if (!file.isEmpty()){
//					byte[] arrayBytes = file.getBytes();
//					String caminhoFile = "/photos";
//					Path caminho = Paths.get(caminhoFile + String.valueOf(inovacaoDTO.getId()) + file.getOriginalFilename());/*pega o caminho junto com nome completo da img*/
//					Files.write(caminho, arrayBytes);

		inovacaoDTO.setImagem((String.valueOf(inovacaoDTO.getId()) + file.getOriginalFilename()).getBytes()); /*So salvar o caminho da img*/
//				}
		return inovacaoService.cadastrarInovacao(inovacaoDTO);
	}

	@GetMapping("/lista")
	@Transactional
	public List<Inovacao> listarInovacao() throws Exception {
		return inovacaoService.listarInovacao();
	}

	@GetMapping("/lista/{id}")
	public ResponseEntity<Inovacao> retornaUmaInovacao(@PathVariable long id) throws Exception {
		return inovacaoService.retornaUmaInovacao(id);
	}

	@GetMapping(value="/lista/concluidos")
	@Transactional
	public List<Inovacao> listarInovacoesConcluidas() throws Exception{
		return inovacaoService.listarInovacoesConcluidas("Concluído");
	}

	@GetMapping(value="/lista/reprovados")
	@Transactional
	public List<Inovacao> listarInovacoesReprovadas() throws Exception{
		return inovacaoService.listarInovacoesReprovadas("Reprovado");
	}

	@GetMapping(value="/lista/emAndamento")
	@Transactional
	public List<Inovacao> listarInovacoesEmAndamento() throws Exception{
		String status = "Escalação\", \"No prazo\", \"Em atraso\"";
		return inovacaoService.listarInovacoesEmAndamento(status);
	}

	@GetMapping(value ="searchTitle")
	@ResponseBody
	public ResponseEntity<List<Inovacao>> searchPorTitle(@RequestParam(name = "title") String title) {
		return inovacaoService.searchTitle(title);
	}

	@GetMapping(value ="searchResponsible")
	@ResponseBody
	public ResponseEntity<List<Inovacao>> searchPorResponsible(@RequestParam(name = "responsible") String responsible) {
		return inovacaoService.searchResponsible(responsible);
	}

	@GetMapping(value ="searchArea")
	@ResponseBody
	public ResponseEntity<List<Inovacao>> searchPorArea(@RequestParam(name = "area") String area) {
		return inovacaoService.searchArea(area);
	}

	@GetMapping(value ="searchStatus")
	@ResponseBody
	public ResponseEntity<List<Inovacao>> searchPorStatus(@RequestParam(name = "status") String status) {
		return inovacaoService.searchStatus(status);
	}

	@GetMapping(value ="searchPontosEscalacao")
	@ResponseBody
	public ResponseEntity<List<Inovacao>> searchPorPontosEscalacao(@RequestParam(name = "pontosEscalacao") String pontosEscalacao) {
		return inovacaoService.searchPontosEscalacao(pontosEscalacao);
	}

	@GetMapping(value ="searchTimeTrabalho")
	@ResponseBody
	public ResponseEntity<List<Inovacao>> searchPorTimeTrabalho(@RequestParam(name = "timeTrabalho") String timeTrabalho) {
		return inovacaoService.searchTimeTrabalho(timeTrabalho);
	}

//	@GetMapping(value ="searchHg")
//	@ResponseBody
//	public ResponseEntity<List<Inovacao>> searchPorHg(@RequestParam(name = "hg")Hg hg) {
//		return inovacaoService.searchHg(hg);
//	}

	@GetMapping(value ="searchMweb")
	@ResponseBody
	public ResponseEntity<List<Inovacao>> searchPorMweb(@RequestParam(name = "mweb") Integer mweb) {
		return inovacaoService.searchMweb(mweb);
	}


	@PutMapping("/editar/{id}")
	@Transactional
	public InovacaoDTO atualizarInovacao(@RequestBody InovacaoDTO inovacaoDTO, @PathVariable("id") Long id) throws Exception {
		return inovacaoService.atualizarInovacao(inovacaoDTO, id);
	}

	@DeleteMapping("/excluir/{id}")
	@Transactional
	public ResponseEntity<InovacaoDTO> excluirInovacao(@PathVariable Long id) throws Exception {
		return inovacaoService.excluirInovacao(id);
	}

}