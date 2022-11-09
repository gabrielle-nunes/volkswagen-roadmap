package br.com.roadmap.volkswagen.controller;

import java.util.List;

import javax.transaction.Transactional;

import br.com.roadmap.volkswagen.entities.Hg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

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
	@Transactional
	public ResponseEntity<List<Inovacao>> searchPorTitle(@RequestParam(name = "title") String title) {
		return inovacaoService.searchTitle(title);
	}

	@GetMapping(value ="searchResponsible")
	@ResponseBody
	@Transactional
	public ResponseEntity<List<Inovacao>> searchPorResponsible(@RequestParam(name = "responsible") String responsible) {
		return inovacaoService.searchResponsible(responsible);
	}

	@GetMapping(value ="searchArea")
	@ResponseBody
	@Transactional
	public ResponseEntity<List<Inovacao>> searchPorArea(@RequestParam(name = "area") String area) {
		return inovacaoService.searchArea(area);
	}

	@GetMapping(value ="searchStatus")
	@ResponseBody
	@Transactional
	public ResponseEntity<List<Inovacao>> searchPorStatus(@RequestParam(name = "status") String status) {
		return inovacaoService.searchStatus(status);
	}

	@GetMapping(value ="searchPontosEscalacao")
	@ResponseBody
	@Transactional
	public ResponseEntity<List<Inovacao>> searchPorPontosEscalacao(@RequestParam(name = "pontosEscalacao") String pontosEscalacao) {
		return inovacaoService.searchPontosEscalacao(pontosEscalacao);
	}

	@GetMapping(value ="searchTimeTrabalho")
	@ResponseBody
	@Transactional
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
}