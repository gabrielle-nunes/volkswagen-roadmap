package br.com.roadmap.volkswagen.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

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

	public ResponseEntity<InovacaoDTO> excluirInovacao(Long id) {

		Optional<Inovacao> inovacao = inovacaoRepository.findById(id);

		if (inovacao.isPresent()) {
			inovacaoRepository.deleteById(id);
			return ResponseEntity.ok().build();
		}

		return ResponseEntity.notFound().build();
	}

	public List<Inovacao> listarInovacao() {
		List<Inovacao> inovacao = inovacaoRepository.findAll();
		return inovacao;
	}

	/*public InovacaoDTO atualizarInovacao(InovacaoDTO inovacaoDTO, Long id) throws Exception {
		Optional<Inovacao> inovacao = inovacaoRepository.findById(id);
		Inovacao atualizarInovacao = null;
		try {
			if (inovacao.isPresent()) {
				atualizarInovacao = inovacaoRepository.save(Inovacao.convert(inovacaoDTO));
				return InovacaoDTO.convert(atualizarInovacao);
			}
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}

		return InovacaoDTO.convert(atualizarInovacao);
	}*/
}
