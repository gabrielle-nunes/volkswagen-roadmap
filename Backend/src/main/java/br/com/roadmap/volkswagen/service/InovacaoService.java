package br.com.roadmap.volkswagen.service;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

import br.com.roadmap.volkswagen.dto.InovacaoDTO;
import br.com.roadmap.volkswagen.entities.Inovacao;
import br.com.roadmap.volkswagen.repository.InovacaoRepository;

@Service
public class InovacaoService {

	@Autowired
	private InovacaoRepository inovacaoRepository;

	public InovacaoDTO cadastrarInovacao(InovacaoDTO inovacaoDTO) {
		Inovacao inovacao = inovacaoRepository.save(Inovacao.convert(inovacaoDTO));
		return InovacaoDTO.convert(inovacao);
	}

	// fazer tratamento de exceção
	/*public InovacaoDTO excluirInovacao(Long id) throws Exception {
		Optional<Inovacao> inovacao = inovacaoRepository.findById(id);
		
		if (!inovacao.isPresent()) {
			throw new Exception();
		} 
		
		inovacaoRepository.delete(inovacao.get());
		
		return null;
	}*/
	
	@DeleteMapping("/{id}")
	@Transactional
	public ResponseEntity<InovacaoDTO> excluirInovacao(@PathVariable Long id){
		
		Optional<Inovacao> inovacao = inovacaoRepository.findById(id);
		
		if(inovacao.isPresent()) {
			inovacaoRepository.deleteById(id);
			return ResponseEntity.ok().build();
		}
		
		return ResponseEntity.notFound().build();
	}
}
