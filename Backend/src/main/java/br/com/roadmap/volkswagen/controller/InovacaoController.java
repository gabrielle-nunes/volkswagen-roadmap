package br.com.roadmap.volkswagen.controller;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
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
	
	@PutMapping("/editar/{id}")
	@Transactional
	public InovacaoDTO atualizarInovacao(@RequestBody InovacaoDTO inovacaoDTO, @PathVariable("id") Long id) throws Exception {
		return inovacaoService.atualizarInovacao(inovacaoDTO, id);
		
	}
}
