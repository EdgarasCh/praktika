package lt.itakademija.candidateCRUD;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotEmpty;

@Entity
public final class CandidateEntity {

	@Id
	private String personCode;
	@Size(max = 45)
	private String firstName;
	@Size(max = 45)
	private String lastName;
	private String date;
	@Size(max = 1000)
	private String description;
	private Long countyId;
	private int partyId;

	public CandidateEntity() {
	}

	public CandidateEntity(String firstName, String lastName, String date, String personCode, int partyId,long countyId,
			String description) {

		this.firstName = firstName;
		this.lastName = lastName;
		this.date = date;
		this.personCode = personCode;
		this.partyId = partyId;
		this.countyId = countyId;
		this.description = description;
	}

	public String getPersonCode() {
		return personCode;
	}

	public void setPersonCode(String personCode) {
		this.personCode = personCode;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getPartyId() {
		return partyId;
	}

	public void setPartyId(int partyId) {
		this.partyId = partyId;
	}

	

}
