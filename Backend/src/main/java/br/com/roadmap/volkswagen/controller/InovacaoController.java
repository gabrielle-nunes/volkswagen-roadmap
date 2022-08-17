package br.com.roadmap.volkswagen.controller;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.com.roadmap.volkswagen.dto.InovacaoDTO;
import br.com.roadmap.volkswagen.entities.Inovacao;
import br.com.roadmap.volkswagen.service.InovacaoService;

@RestController
@RequestMapping("/inovacao")
public class InovacaoController {

	@Autowired
	private InovacaoService inovacaoService;

	@PostMapping("/cadastro")
	@Transactional
	public InovacaoDTO cadastrarInovacao(@RequestBody InovacaoDTO inovacaoDTO) throws Exception {
		return inovacaoService.cadastrarInovacao(inovacaoDTO);
	}

	@DeleteMapping("/excluir/{id}")
	@Transactional
	public ResponseEntity<InovacaoDTO> excluirInovacao(@PathVariable Long id) throws Exception {
		return inovacaoService.excluirInovacao(id);
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

	@PutMapping("/editar/{id}")
	@Transactional
	public InovacaoDTO atualizarInovacao(@RequestBody InovacaoDTO inovacaoDTO, @PathVariable("id") Long id) throws Exception {
		return inovacaoService.atualizarInovacao(inovacaoDTO, id);

	}

	@GetMapping(value="/{title}")
	@Transactional
	public ResponseEntity<Inovacao> buscarPorNome(@PathVariable String title) {
		return inovacaoService.findTitle(title);
	}

//	Buscas
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

	@GetMapping(value ="timeTrabalho")
	@ResponseBody
	public ResponseEntity<List<Inovacao>> searchPorTimeTrabalho(@RequestParam(name = "timeTrabalho") String timeTrabalho) {
		return inovacaoService.searchTimeTrabalho(timeTrabalho);
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
	
}
