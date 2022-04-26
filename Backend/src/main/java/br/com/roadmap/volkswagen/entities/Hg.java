package br.com.roadmap.volkswagen.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_hg")
public class Hg {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)	
	private Long Id;

	private String responsable;
	private Date meeting;
	
	public Long getId() {
		return Id;
	}
	public void setId(Long id) {
		Id = id;
	}
	public String getResponsable() {
		return responsable;
	}
	public void setResponsable(String responsable) {
		this.responsable = responsable;
	}
	public Date getMeeting() {
		return meeting;
	}
	public void setMeeting(Date meeting) {
		this.meeting = meeting;
	}
	
}
