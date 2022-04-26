package br.com.roadmap.volkswagen.service;

import org.springframework.beans.factory.annotation.Autowired;
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
}
