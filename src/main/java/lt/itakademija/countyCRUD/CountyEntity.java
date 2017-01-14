package lt.itakademija.countyCRUD;

import java.util.ArrayList;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lt.itakademija.candidateCRUD.CandidateEntity;
import lt.itakademija.districtCRUD.DistrictEntity;

@Entity
public final class CountyEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String countyName;
	private ArrayList<DistrictEntity> districts;
	private ArrayList<CandidateEntity> candidates;

	public CountyEntity() {
	}

	public CountyEntity(String countyName, ArrayList<DistrictEntity> districts, ArrayList<CandidateEntity> candidates) {
		this.countyName = countyName;
		this.districts = districts;
		this.candidates = candidates;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCountyName() {
		return countyName;
	}

	public void setCountyName(String countyName) {
		this.countyName = countyName;
	}

	public ArrayList<DistrictEntity> getDistricts() {
		return districts;
	}

	public void setDistricts(ArrayList<DistrictEntity> districts) {
		this.districts = districts;
	}

	public ArrayList<CandidateEntity> getCandidates() {
		return candidates;
	}

	public void setCandidates(ArrayList<CandidateEntity> candidates) {
		this.candidates = candidates;
	}

}
