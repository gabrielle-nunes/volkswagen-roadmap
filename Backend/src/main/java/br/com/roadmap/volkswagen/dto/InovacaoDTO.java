package br.com.roadmap.volkswagen.dto;

import br.com.roadmap.volkswagen.entities.Hg;
import br.com.roadmap.volkswagen.entities.Inovacao;
import br.com.roadmap.volkswagen.entities.Setor;

public class InovacaoDTO {

	private Long id;
	private String title;
	private String responsible;
	private String area;
	private Integer mweb;
	private String ganhosPrevistos;
	private Integer saving;
	private String recursosNecessarios;
	private Integer invest;
	private String timeTrabalho;
	private String parceriasNecessarias;
	private String pontosEscalacao;
	private String divulgacao;
	private Hg hg;
	private static Setor setor;
	private String status;
	private String actualState;
	private String targetState;
	private String calculationExplication;
	private String staircaseElement;
	private String handlungsfeld;

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

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
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

	public Hg getHg() {
		return hg;
	}

	public void setHg(Hg hg) {
		this.hg = hg;
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

	public static InovacaoDTO convert(Inovacao inovacao) throws Exception {

		InovacaoDTO inovacaoDTO = new InovacaoDTO();

		inovacaoDTO.setArea(inovacao.getArea());
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
		if (inovacao.getStatus().equals("Concluído") || inovacao.getStatus().equals("No prazo")
				|| inovacao.getStatus().equals("Em atraso") || inovacao.getStatus().equals("Escalação")
				|| inovacao.getStatus().equals("Reprovado")) {

			inovacaoDTO.setStatus(inovacao.getStatus());
		} else {
			throw new Exception("Selecione um status válido.");
		}
		return inovacaoDTO;

	}
}
