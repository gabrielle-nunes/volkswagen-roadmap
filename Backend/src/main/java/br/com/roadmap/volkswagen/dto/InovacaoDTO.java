package br.com.roadmap.volkswagen.dto;

import br.com.roadmap.volkswagen.entities.Inovacao;
import br.com.roadmap.volkswagen.entities.Setor;

public class InovacaoDTO {

	private Long id;
	private String title;
	private String responsible;
	private Integer mweb;
	private String ganhosPrevistos;
	private Integer saving;
	private String recursosNecessarios;
	private Integer invest;
	private String timeTrabalho;
	private String parceriasNecessarias;
	private String pontosEscalacao;
	private String divulgacao;
	private static Setor setor;
	private String status;
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
	private String dataHg9;

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

	public Setor getSetor() {
		return setor;
	}

	public void setSetor(Setor setor) {
		this.setor = setor;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
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
	
	public String getDataHg9() {
		return dataHg9;
	}

	public void setDataHg9(String dataHg9) {
		this.dataHg9 = dataHg9;
	}

	public static InovacaoDTO convert(Inovacao inovacao) throws Exception {

		InovacaoDTO inovacaoDTO = new InovacaoDTO();
		inovacaoDTO.setDivulgacao(inovacao.getDivulgacao());
		inovacaoDTO.setGanhosPrevistos(inovacao.getGanhosPrevistos());
		inovacaoDTO.setId(inovacao.getId());
		inovacaoDTO.setInvest(inovacao.getInvest());
		inovacaoDTO.setMweb(inovacao.getMweb());
		inovacaoDTO.setParceriasNecessarias(inovacao.getParceriasNecessarias());
		inovacaoDTO.setPontosEscalacao(inovacao.getPontosEscalacao());
		inovacaoDTO.setRecursosNecessarios(inovacao.getRecursosNecessarios());
		inovacaoDTO.setResponsible(inovacao.getResponsible());
		inovacaoDTO.setSaving(inovacao.getSaving());
		inovacaoDTO.setTimeTrabalho(inovacao.getTimeTrabalho());
		inovacaoDTO.setTitle(inovacao.getTitle());
		inovacaoDTO.setActualState(inovacao.getActualState());
		inovacaoDTO.setStaircaseElement(inovacao.getStaircaseElement());
		inovacaoDTO.setTargetState(inovacao.getTargetState());
		inovacaoDTO.setCalculationExplication(inovacao.getCalculationExplication());
		inovacaoDTO.setHandlungsfeld(inovacao.getHandlungsfeld());
		inovacaoDTO.setStatus(inovacao.getStatus());
		inovacaoDTO.setHg1(inovacao.getHg1());
		inovacaoDTO.setHg2(inovacao.getHg2());
		inovacaoDTO.setHg3(inovacao.getHg3());
		inovacaoDTO.setHg4(inovacao.getHg4());
		inovacaoDTO.setHg5(inovacao.getHg5());
		inovacaoDTO.setResponsibleHg1(inovacao.getResponsibleHg1());
		inovacaoDTO.setResponsibleHg2(inovacao.getResponsibleHg2());
		inovacaoDTO.setResponsibleHg3(inovacao.getResponsibleHg3());
		inovacaoDTO.setResponsibleHg4(inovacao.getResponsibleHg4());
		inovacaoDTO.setResponsibleHg5(inovacao.getResponsibleHg5());
		inovacaoDTO.setMotivoHg9(inovacao.getMotivoHg9());
		inovacaoDTO.setOkHg1(inovacao.getOkHg1());
		inovacaoDTO.setOkHg2(inovacao.getOkHg2());
		inovacaoDTO.setOkHg3(inovacao.getOkHg3());
		inovacaoDTO.setOkHg4(inovacao.getOkHg4());
		inovacaoDTO.setOkHg5(inovacao.getOkHg5());
		inovacaoDTO.setDataHg1(inovacao.getDataHg1());
		inovacaoDTO.setDataHg2(inovacao.getDataHg2());
		inovacaoDTO.setDataHg3(inovacao.getDataHg3());
		inovacaoDTO.setDataHg4(inovacao.getDataHg4());
		inovacaoDTO.setDataHg5(inovacao.getDataHg5());
		inovacaoDTO.setDataHg9(inovacao.getDataHg9());
		return inovacaoDTO;

	}