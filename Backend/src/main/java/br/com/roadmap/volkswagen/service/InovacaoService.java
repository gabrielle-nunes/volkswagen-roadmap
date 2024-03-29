package br.com.roadmap.volkswagen.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.roadmap.volkswagen.constantes.ConstantesRoadmap;
import br.com.roadmap.volkswagen.dto.InovacaoDTO;
import br.com.roadmap.volkswagen.entities.Inovacao;
import br.com.roadmap.volkswagen.repository.InovacaoRepository;

@Service
public class InovacaoService {

	@Autowired
	private InovacaoRepository inovacaoRepository;

	/*private Date converteData(String date) throws ParseException {
		SimpleDateFormat formato = new SimpleDateFormat("dd/MM/yyyy");
		formato.setLenient(false);
		Date finalDate = formato.parse(date);
		return finalDate;
	}*/

	public InovacaoDTO cadastrarInovacao(InovacaoDTO inovacaoDTO) throws Exception {

		Inovacao inovacao = null;
		try {

			if (inovacaoDTO.getStatus().equals(ConstantesRoadmap.getConcluido())
					|| inovacaoDTO.getStatus().equals(ConstantesRoadmap.getReprovado())) {
				throw new Exception("Uma inovação não pode ser criada com o status: concluído ou reprovado");
			}

			/*if (!(inovacaoDTO.getDataHg9().isEmpty() && inovacaoDTO.getMotivoHg9().isEmpty())) {
				converteData(inovacaoDTO.getDataHg9());
				inovacaoDTO.setStatus("Reprovado");
		  } else {

				if (!(inovacaoDTO.getDataHg1().isEmpty())) {
					Date data1 = converteData(inovacaoDTO.getDataHg1());
					long comparador1 = data1.getTime();
					if (!(inovacaoDTO.getDataHg2().isEmpty())) {
						Date data2 = converteData(inovacaoDTO.getDataHg2());
						long comparador2 = data2.getTime();
						if (comparador2 < comparador1) {
							throw new Exception("Data menor que da reunião anterior. Verifique a data escolhida.");
						}
						if (!(inovacaoDTO.getDataHg3().isEmpty())) {
							Date data3 = converteData(inovacaoDTO.getDataHg3());
							long comparador3 = data3.getTime();
							if (comparador3 < comparador2) {
								throw new Exception("Data menor que da reunião anterior. Verifique a data escolhida.");
							}
							if (!(inovacaoDTO.getDataHg4().isEmpty())) {
								Date data4 = converteData(inovacaoDTO.getDataHg4());
								long comparador4 = data4.getTime();
								if (comparador4 < comparador3) {
									throw new Exception(
											"Data menor que da reunião anterior. Verifique a data escolhida.");
								}
								if (!(inovacaoDTO.getDataHg5().isEmpty())) {
									Date data5 = converteData(inovacaoDTO.getDataHg5());
									long comparador5 = data5.getTime();
									if (comparador5 < comparador4) {
										throw new Exception(
												"Data menor que da reunião anterior. Verifique a data escolhida.");
									}
								}
							}
						}
					}

				}
			}*/

			/*if (inovacaoDTO.getOkHg1().equals(true)) {
				inovacaoDTO.setHg1("Concluído");
				if (inovacaoDTO.getOkHg2().equals(true)) {
					inovacaoDTO.setHg2("Concluído");
					if (inovacaoDTO.getOkHg3().equals(true)) {
						inovacaoDTO.setHg3("Concluído");
						if (inovacaoDTO.getOkHg4().equals(true)) {
							inovacaoDTO.setHg4("Concluído");
							if (inovacaoDTO.getOkHg5().equals(true)) {
								inovacaoDTO.setHg5("Concluído");
							}
						}
					}
				}
			}*/

			inovacao = inovacaoRepository.save(Inovacao.convert(inovacaoDTO));

		} catch (Exception e) {
			e.printStackTrace();
			throw new Exception("Erro ao cadastrar a inovação!");

		}
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

	public List<Inovacao> listarInovacoesEmAndamento(String status) throws Exception {
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

				if (in.getTitle() != null || in.getResponsible() != null || in.getMweb() != null
						|| in.getGanhosPrevistos() != null || in.getSaving() != null
						|| in.getRecursosNecessarios() != null || in.getInvest() != null || in.getTimeTrabalho() != null
						|| in.getParceriasNecessarias() != null || in.getPontosEscalacao() != null
						|| in.getDivulgacao() != null || in.getSetor() != null || in.getStatus() != null) {

					in.setSetor(inovacaoDTO.getSetor());
					in.setTitle(inovacaoDTO.getTitle());
					in.setResponsible(inovacaoDTO.getResponsible());
					in.setMweb(inovacaoDTO.getMweb());
					in.setGanhosPrevistos(inovacaoDTO.getGanhosPrevistos());
					in.setSaving(inovacaoDTO.getSaving());
					in.setRecursosNecessarios(inovacaoDTO.getRecursosNecessarios());
					in.setInvest(inovacaoDTO.getInvest());
					in.setTimeTrabalho(inovacaoDTO.getTimeTrabalho());
					in.setParceriasNecessarias(inovacaoDTO.getParceriasNecessarias());
					in.setPontosEscalacao(inovacaoDTO.getPontosEscalacao());
					in.setDivulgacao(inovacaoDTO.getDivulgacao());
					in.setSetor(inovacaoDTO.getSetor());
					in.setStatus(inovacaoDTO.getStatus());
				/*	in.setHg1(inovacaoDTO.getHg1());
					in.setHg2(inovacaoDTO.getHg2());
					in.setHg3(inovacaoDTO.getHg3());
					in.setHg4(inovacaoDTO.getHg4());
					in.setHg5(inovacaoDTO.getHg5());
					in.setResponsibleHg1(inovacaoDTO.getResponsibleHg1());
					in.setResponsibleHg2(inovacaoDTO.getResponsibleHg2());
					in.setResponsibleHg3(inovacaoDTO.getResponsibleHg3());
					in.setResponsibleHg4(inovacaoDTO.getResponsibleHg4());
					in.setResponsibleHg5(inovacaoDTO.getResponsibleHg5());
					in.setMotivoHg9(inovacaoDTO.getMotivoHg9());
					in.setOkHg1(inovacaoDTO.getOkHg1());
					in.setOkHg2(inovacaoDTO.getOkHg2());
					in.setOkHg3(inovacaoDTO.getOkHg3());
					in.setOkHg4(inovacaoDTO.getOkHg4());
					in.setOkHg5(inovacaoDTO.getOkHg5());
					in.setDataHg1(inovacaoDTO.getDataHg1());
					in.setDataHg2(inovacaoDTO.getDataHg2());
					in.setDataHg3(inovacaoDTO.getDataHg3());
					in.setDataHg4(inovacaoDTO.getDataHg4());
					in.setDataHg5(inovacaoDTO.getDataHg5());
					in.setDataHg9(inovacaoDTO.getDataHg9());*/
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

		if (!(serviceTitle.isEmpty()))
			return new ResponseEntity<List<Inovacao>>(serviceTitle, HttpStatus.OK);
		else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);

	}

	public ResponseEntity<List<Inovacao>> searchResponsible(String responsible) {
		List<Inovacao> serviceResponsible = inovacaoRepository.searchByResponsible(responsible);
		if (!(serviceResponsible.isEmpty()))
			return new ResponseEntity<List<Inovacao>>(serviceResponsible, HttpStatus.OK);
		else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);

	}

	public ResponseEntity<List<Inovacao>> searchSetor(String setor) {
		List<Inovacao> serviceSetor = inovacaoRepository.searchBySetor(setor);
		if (!(serviceSetor.isEmpty()))
			return new ResponseEntity<List<Inovacao>>(serviceSetor, HttpStatus.OK);
		else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	public ResponseEntity<List<Inovacao>> searchStatus(String status) {
		List<Inovacao> serviceStatus = inovacaoRepository.searchByStatus(status);

		if (!(serviceStatus.isEmpty()))
			return new ResponseEntity<List<Inovacao>>(serviceStatus, HttpStatus.OK);
		else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);

	}

	public ResponseEntity<List<Inovacao>> searchPontosEscalacao(String pontosEscalacao) {
		List<Inovacao> servicePontosEscalacao = inovacaoRepository.searchByPontosEscalacao(pontosEscalacao);
		if (!(servicePontosEscalacao.isEmpty()))
			return new ResponseEntity<List<Inovacao>>(servicePontosEscalacao, HttpStatus.OK);
		else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	public ResponseEntity<List<Inovacao>> searchTimeTrabalho(String timeTrabalho) {

		List<Inovacao> serviceTimeTrabalho = inovacaoRepository.searchByTimeTrabalho(timeTrabalho);
		if (!(serviceTimeTrabalho.isEmpty()))
			return new ResponseEntity<List<Inovacao>>(serviceTimeTrabalho, HttpStatus.OK);
		else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);

	}


	public ResponseEntity<List<Inovacao>> searchMweb(Integer mweb) {
		List<Inovacao> serviceMweb= inovacaoRepository.searchByMweb(mweb);
		return new ResponseEntity<List<Inovacao>>(serviceMweb, HttpStatus.OK);
	}

}