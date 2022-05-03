package br.com.roadmap.volkswagen.controller;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.roadmap.volkswagen.dto.InovacaoDTO;
import br.com.roadmap.volkswagen.service.InovacaoService;

@RestController
@RequestMapping("/inovacao")
public class InovacaoController {

	@Autowired
	private InovacaoService inovacaoService;
	
	@PostMapping("/cadastro")
	@Transactional
	public InovacaoDTO cadastrarInovacao(@RequestBody InovacaoDTO inovacaoDTO) {
		return inovacaoService.cadastrarInovacao(inovacaoDTO);
	}
	
	@DeleteMapping("/excluir/{id}")
	@Transactional
	public ResponseEntity<InovacaoDTO> excluirInovacao(@PathVariable Long id) throws Exception {
		return inovacaoService.excluirInovacao(id);
	}
}
