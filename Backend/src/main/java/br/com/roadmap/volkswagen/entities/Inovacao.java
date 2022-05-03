package br.com.roadmap.volkswagen.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import br.com.roadmap.volkswagen.dto.InovacaoDTO;

@Entity
@Table(name = "tbl_inovacao")
public class Inovacao {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
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

	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private Hg hg;
	
	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private Setor setor;
	
	

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

	public static Inovacao convert(InovacaoDTO inovacaoDTO) {
		Inovacao inovacao = new Inovacao();
		
		inovacao.setArea(inovacaoDTO.getArea());
		inovacao.setDivulgacao(inovacaoDTO.getDivulgacao());
		inovacao.setGanhosPrevistos(inovacaoDTO.getGanhosPrevistos());
		inovacao.setHg(inovacaoDTO.getHg());
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
		
		return inovacao;
	}
}
