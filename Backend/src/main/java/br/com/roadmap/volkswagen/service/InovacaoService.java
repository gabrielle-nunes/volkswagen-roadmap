package br.com.roadmap.volkswagen.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.roadmap.volkswagen.dto.InovacaoDTO;
import br.com.roadmap.volkswagen.entities.Inovacao;
import br.com.roadmap.volkswagen.repository.InovacaoRepository;

@Service
public class InovacaoService {

	@Autowired
	private InovacaoRepository inovacaoRepository;

	public InovacaoDTO cadastrarInovacao(InovacaoDTO inovacaoDTO) throws Exception {
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

	// Lista todas as inovações
	public List<Inovacao> listarInovacao() throws Exception {
		List<Inovacao> inovacao = inovacaoRepository.findAll();

		if (!inovacao.isEmpty()) {
			return inovacao;

		}
		throw new Exception("Nenhuma inovação cadastrada.");

	}

	public List<Inovacao> listarInovacoesConcluidas(String status) throws Exception {
		List<Inovacao> inovacao = inovacaoRepository.findByStatus("Concluído");
		if (!inovacao.isEmpty()) {
			return inovacao;
		}
		throw new Exception("Nenhuma inovação cadastrada está concluída.");
	}

	public List<Inovacao> listarInovacoesReprovadas(String status) throws Exception {
		List<Inovacao> inovacao = inovacaoRepository.findByStatus("Reprovado");
		if (!inovacao.isEmpty()) {
			return inovacao;
		}
		throw new Exception("Nenhuma inovação cadastrada está reprovada.");
	}

	public List<Inovacao> listarInovacoesEmAndamento (String status) throws Exception {
		List<Inovacao> inovacao = inovacaoRepository.findByStatusEquals(status);
		if (!inovacao.isEmpty()) {
			return inovacao;
		}
		throw new Exception("Nenhuma inovação cadastrada está em andamento.");
	}

	public InovacaoDTO atualizarInovacao(InovacaoDTO inovacaoDTO, Long id) throws Exception {
		Optional<Inovacao> inovacao = inovacaoRepository.findById(id);

		try {
			if (inovacao.isPresent()) {

				Inovacao in = inovacao.get();

				if (in.getTitle() != null || in.getResponsible() != null || in.getArea() != null || in.getMweb() != null
						|| in.getGanhosPrevistos() != null || in.getSaving() != null
						|| in.getRecursosNecessarios() != null || in.getInvest() != null || in.getTimeTrabalho() != null
						|| in.getParceriasNecessarias() != null || in.getPontosEscalacao() != null
						|| in.getDivulgacao() != null || in.getHg() != null || in.getSetor() != null
						|| in.getStatus() != null) {

					in.setTitle(inovacaoDTO.getTitle());
					in.setResponsible(inovacaoDTO.getResponsible());
					in.setArea(inovacaoDTO.getArea());
					in.setMweb(inovacaoDTO.getMweb());
					in.setGanhosPrevistos(inovacaoDTO.getGanhosPrevistos());
					in.setSaving(inovacaoDTO.getSaving());
					in.setRecursosNecessarios(inovacaoDTO.getRecursosNecessarios());
					in.setInvest(inovacaoDTO.getInvest());
					in.setTimeTrabalho(inovacaoDTO.getTimeTrabalho());
					in.setParceriasNecessarias(inovacaoDTO.getParceriasNecessarias());
					in.setPontosEscalacao(inovacaoDTO.getPontosEscalacao());
					in.setDivulgacao(inovacaoDTO.getDivulgacao());
					in.setHg(inovacaoDTO.getHg());
					in.setSetor(inovacaoDTO.getSetor());
					in.setStatus(inovacaoDTO.getStatus());
				}

				inovacaoRepository.save(in);
				return InovacaoDTO.convert(in);
			}
			throw new Exception("Esta inovação não existe.");

		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}

	public ResponseEntity<Inovacao> retornaUmaInovacao(long id) {
		Optional<Inovacao> inovacao = inovacaoRepository.findById(id);

		if (inovacao.isPresent())
			return new ResponseEntity<Inovacao>(inovacao.get(), HttpStatus.OK);
		else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);

	}

	public ResponseEntity<List<Inovacao>> searchTitle(String title) {
		List<Inovacao> serviceTitle = inovacaoRepository.searchByTitle(title);
		return new ResponseEntity<List<Inovacao>>(serviceTitle, HttpStatus.OK);
	}

	public ResponseEntity<List<Inovacao>> searchResponsible(String responsible) {
		List<Inovacao> serviceResponsible = inovacaoRepository.searchByResponsible(responsible);
		return new ResponseEntity<List<Inovacao>>(serviceResponsible, HttpStatus.OK);
	}

	public ResponseEntity<List<Inovacao>> searchArea(String area) {
		List<Inovacao> serviceArea = inovacaoRepository.searchByArea(area);
		return new ResponseEntity<List<Inovacao>>(serviceArea, HttpStatus.OK);
	}

	public ResponseEntity<List<Inovacao>> searchStatus(String status) {
		List<Inovacao> serviceStatus = inovacaoRepository.searchByStatus(status);
		return new ResponseEntity<List<Inovacao>>(serviceStatus, HttpStatus.OK);
	}

	public ResponseEntity<List<Inovacao>> searchPontosEscalacao(String pontosEscalacao) {
		List<Inovacao> servicePontosEscalacao = inovacaoRepository.searchByPontosEscalacao(pontosEscalacao);
		return new ResponseEntity<List<Inovacao>>(servicePontosEscalacao, HttpStatus.OK);
	}

	public ResponseEntity<List<Inovacao>> searchTimeTrabalho(String timeTrabalho) {
		List<Inovacao> serviceTimeTrabalho= inovacaoRepository.searchByTimeTrabalho(timeTrabalho);
		return new ResponseEntity<List<Inovacao>>(serviceTimeTrabalho, HttpStatus.OK);

	}
//teste
}