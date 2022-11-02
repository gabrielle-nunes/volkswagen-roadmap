package br.com.roadmap.volkswagen.entities;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import br.com.roadmap.volkswagen.constantes.ConstantesRoadmap;
import br.com.roadmap.volkswagen.dto.InovacaoDTO;

@Entity
@Table(name = "tbl_inovacao")
public class Inovacao {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@NotBlank
	private String title;
	@NotBlank
	private String responsible;
	private Integer mweb;
	@NotBlank
	private String ganhosPrevistos;
	private Integer saving;
	@NotBlank
	private String recursosNecessarios;
	private Integer invest;
	@NotBlank
	private String timeTrabalho;
	private String parceriasNecessarias;
	private String pontosEscalacao;
	private String divulgacao;
	private String actualState;
	private String targetState;
	private String calculationExplication;
	private String staircaseElement;
	private String handlungsfeld;
	
	private String hg1;
	private String hg2;
	private String hg3;
	private String hg4;
	private String hg5;
	
	private String hg9;
	private String motivoHg9;
	
	private String responsibleHg1;
	private String responsibleHg2;
	private String responsibleHg3;
	private String responsibleHg4;
	private String responsibleHg5;
	
	private Boolean okHg1;
	private Boolean okHg2;
	private Boolean okHg3;
	private Boolean okHg4;
	private Boolean okHg5;
	
	private String dataHg1;
	private String dataHg2;
	private String dataHg3;
	private String dataHg4;
	private String dataHg5;

	/*
	 * @JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
	 * 
	 * @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL) private Hg hg;
	 */

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "setor_id")
	@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
	private Setor setor;
	private String status;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getResponsible() {
		return responsible;
	}

	public void setResponsible(String responsible) {
		this.responsible = responsible;
	}

	public Integer getMweb() {
		return mweb;
	}

	public void setMweb(Integer mweb) {
		this.mweb = mweb;
	}

	public Setor getSetor() {
		return setor;
	}

	public void setSetor(Setor setor) {
		this.setor = setor;
	}

	public String getGanhosPrevistos() {
		return ganhosPrevistos;
	}

	public void setGanhosPrevistos(String ganhosPrevistos) {
		this.ganhosPrevistos = ganhosPrevistos;
	}

	public Integer getSaving() {
		return saving;
	}

	public void setSaving(Integer saving) {
		this.saving = saving;
	}

	public String getRecursosNecessarios() {
		return recursosNecessarios;
	}

	public void setRecursosNecessarios(String recursosNecessarios) {
		this.recursosNecessarios = recursosNecessarios;
	}

	public Integer getInvest() {
		return invest;
	}

	public void setInvest(Integer invest) {
		this.invest = invest;
	}

	public String getTimeTrabalho() {
		return timeTrabalho;
	}

	public void setTimeTrabalho(String timeTrabalho) {
		this.timeTrabalho = timeTrabalho;
	}

	public String getParceriasNecessarias() {
		return parceriasNecessarias;
	}

	public void setParceriasNecessarias(String parceriasNecessarias) {
		this.parceriasNecessarias = parceriasNecessarias;
	}

	public String getPontosEscalacao() {
		return pontosEscalacao;
	}

	public void setPontosEscalacao(String pontosEscalacao) {
		this.pontosEscalacao = pontosEscalacao;
	}

	public String getDivulgacao() {
		return divulgacao;
	}

	public void setDivulgacao(String divulgacao) {
		this.divulgacao = divulgacao;
	}

	public String getActualState() {
		return actualState;
	}

	public void setActualState(String actualState) {
		this.actualState = actualState;
	}

	public String getTargetState() {
		return targetState;
	}

	public void setTargetState(String targetState) {
		this.targetState = targetState;
	}

	public String getCalculationExplication() {
		return calculationExplication;
	}

	public void setCalculationExplication(String calculationExplication) {
		this.calculationExplication = calculationExplication;
	}

	public String getStaircaseElement() {
		return staircaseElement;
	}

	public void setStaircaseElement(String staircaseElement) {
		this.staircaseElement = staircaseElement;
	}

	public String getHandlungsfeld() {
		return handlungsfeld;
	}

	public void setHandlungsfeld(String handlungsfeld) {
		this.handlungsfeld = handlungsfeld;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getHg1() {
		return hg1;
	}

	public void setHg1(String hg1) {
		this.hg1 = hg1;
	}

	public String getHg2() {
		return hg2;
	}

	public void setHg2(String hg2) {
		this.hg2 = hg2;
	}

	public String getHg3() {
		return hg3;
	}

	public void setHg3(String hg3) {
		this.hg3 = hg3;
	}

	public String getHg4() {
		return hg4;
	}

	public void setHg4(String hg4) {
		this.hg4 = hg4;
	}

	public String getHg5() {
		return hg5;
	}

	public void setHg5(String hg5) {
		this.hg5 = hg5;
	}

	public String getResponsibleHg1() {
		return responsibleHg1;
	}

	public void setResponsibleHg1(String responsibleHg1) {
		this.responsibleHg1 = responsibleHg1;
	}

	public String getResponsibleHg2() {
		return responsibleHg2;
	}

	public void setResponsibleHg2(String responsibleHg2) {
		this.responsibleHg2 = responsibleHg2;
	}

	public String getResponsibleHg3() {
		return responsibleHg3;
	}

	public void setResponsibleHg3(String responsibleHg3) {
		this.responsibleHg3 = responsibleHg3;
	}

	public String getResponsibleHg4() {
		return responsibleHg4;
	}

	public void setResponsibleHg4(String responsibleHg4) {
		this.responsibleHg4 = responsibleHg4;
	}

	public String getResponsibleHg5() {
		return responsibleHg5;
	}

	public void setResponsibleHg5(String responsibleHg5) {
		this.responsibleHg5 = responsibleHg5;
	}

	public String getHg9() {
		return hg9;
	}

	public void setHg9(String hg9) {
		this.hg9 = hg9;
	}

	public String getMotivoHg9() {
		return motivoHg9;
	}

	public void setMotivoHg9(String motivoHg9) {
		this.motivoHg9 = motivoHg9;
	}
	
	public Boolean getOkHg1() {
		return okHg1;
	}

	public void setOkHg1(Boolean okHg1) {
		this.okHg1 = okHg1;
	}

	public Boolean getOkHg2() {
		return okHg2;
	}

	public void setOkHg2(Boolean okHg2) {
		this.okHg2 = okHg2;
	}

	public Boolean getOkHg3() {
		return okHg3;
	}

	public void setOkHg3(Boolean okHg3) {
		this.okHg3 = okHg3;
	}

	public Boolean getOkHg4() {
		return okHg4;
	}

	public void setOkHg4(Boolean okHg4) {
		this.okHg4 = okHg4;
	}

	public Boolean getOkHg5() {
		return okHg5;
	}

	public void setOkHg5(Boolean okHg5) {
		this.okHg5 = okHg5;
	}
	
	public String getDataHg1() {
		return dataHg1;
	}

	public void setDataHg1(String dataHg1) {
		this.dataHg1 = dataHg1;
	}

	public String getDataHg2() {
		return dataHg2;
	}

	public void setDataHg2(String dataHg2) {
		this.dataHg2 = dataHg2;
	}

	public String getDataHg3() {
		return dataHg3;
	}

	public void setDataHg3(String dataHg3) {
		this.dataHg3 = dataHg3;
	}

	public String getDataHg4() {
		return dataHg4;
	}

	public void setDataHg4(String dataHg4) {
		this.dataHg4 = dataHg4;
	}

	public String getDataHg5() {
		return dataHg5;
	}

	public void setDataHg5(String dataHg5) {
		this.dataHg5 = dataHg5;
	}

	public static Inovacao convert(InovacaoDTO inovacaoDTO) throws Exception {
		Inovacao inovacao = new Inovacao();

		inovacao.setDivulgacao(inovacaoDTO.getDivulgacao());
		inovacao.setGanhosPrevistos(inovacaoDTO.getGanhosPrevistos());
		inovacao.setId(inovacaoDTO.getId());
		inovacao.setInvest(inovacaoDTO.getInvest());
		inovacao.setMweb(inovacaoDTO.getMweb());
		inovacao.setParceriasNecessarias(inovacaoDTO.getParceriasNecessarias());
		inovacao.setPontosEscalacao(inovacaoDTO.getPontosEscalacao());
		inovacao.setRecursosNecessarios(inovacaoDTO.getRecursosNecessarios());
		inovacao.setResponsible(inovacaoDTO.getResponsible());
		inovacao.setSaving(inovacaoDTO.getSaving());
		inovacao.setSetor(inovacaoDTO.getSetor());
		inovacao.setTimeTrabalho(inovacaoDTO.getTimeTrabalho());
		inovacao.setTitle(inovacaoDTO.getTitle());
		inovacao.setActualState(inovacaoDTO.getActualState());
		inovacao.setStaircaseElement(inovacaoDTO.getStaircaseElement());
		inovacao.setTargetState(inovacaoDTO.getTargetState());
		inovacao.setCalculationExplication(inovacaoDTO.getCalculationExplication());
		inovacao.setHandlungsfeld(inovacaoDTO.getHandlungsfeld());
		inovacao.setHg1(inovacaoDTO.getHg1());
		inovacao.setHg2(inovacaoDTO.getHg2());
		inovacao.setHg3(inovacaoDTO.getHg3());
		inovacao.setHg4(inovacaoDTO.getHg4());
		inovacao.setHg5(inovacaoDTO.getHg5());
		inovacao.setHg9(inovacaoDTO.getHg9());
		inovacao.setResponsibleHg1(inovacaoDTO.getResponsibleHg1());
		inovacao.setResponsibleHg2(inovacaoDTO.getResponsibleHg2());
		inovacao.setResponsibleHg3(inovacaoDTO.getResponsibleHg3());
		inovacao.setResponsibleHg4(inovacaoDTO.getResponsibleHg4());
		inovacao.setResponsibleHg5(inovacaoDTO.getResponsibleHg5());
		inovacao.setMotivoHg9(inovacaoDTO.getMotivoHg9());
		inovacao.setOkHg1(inovacaoDTO.getOkHg1());
		inovacao.setOkHg2(inovacaoDTO.getOkHg2());
		inovacao.setOkHg3(inovacaoDTO.getOkHg3());
		inovacao.setOkHg4(inovacaoDTO.getOkHg4());
		inovacao.setOkHg5(inovacaoDTO.getOkHg5());
		inovacao.setDataHg1(inovacaoDTO.getDataHg1());
		inovacao.setDataHg2(inovacaoDTO.getDataHg2());
		inovacao.setDataHg3(inovacaoDTO.getDataHg3());
		inovacao.setDataHg4(inovacaoDTO.getDataHg4());
		inovacao.setDataHg5(inovacaoDTO.getDataHg5());

		if (inovacaoDTO.getStatus().equals(ConstantesRoadmap.getConcluido())
				|| inovacaoDTO.getStatus().equals(ConstantesRoadmap.getNoPrazo())
				|| inovacaoDTO.getStatus().equals(ConstantesRoadmap.getEmAtraso())
				|| inovacaoDTO.getStatus().equals(ConstantesRoadmap.getEscalacao())
				|| inovacaoDTO.getStatus().equals(ConstantesRoadmap.getReprovado())) {

			inovacao.setStatus(inovacaoDTO.getStatus());
		} else {
			throw new Exception("Selecione um status válido.");
		}

		return inovacao;
	}
}
