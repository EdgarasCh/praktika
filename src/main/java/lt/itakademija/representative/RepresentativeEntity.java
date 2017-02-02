package lt.itakademija.representative;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Size;
@Entity
public class RepresentativeEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long representativeId;
	@Size(max = 45)
	private String firstName;
	@Size(max = 45)
	private String lastName;
	@Size(max = 45)
	private String userName;
	@Size(max = 45)
	private String password;
	// foreignkey
	private Long districtId;

	public RepresentativeEntity() {
		// TODO Auto-generated constructor stub
	}

	public RepresentativeEntity(String firstName, String lastName, String userName, String password) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.userName = userName;
		this.password = password;
	}

	public Long getId() {
		return representativeId;
	}

	public void setId(Long id) {
		this.representativeId =  id;
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

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Long getDistrictId() {
		return districtId;
	}

	public void setDistrictId(Long districtId) {
		this.districtId = districtId;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((districtId == null) ? 0 : districtId.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		RepresentativeEntity other = (RepresentativeEntity) obj;
		if (districtId == null) {
			if (other.districtId != null)
				return false;
		} else if (!districtId.equals(other.districtId))
			return false;
		return true;
	}
	
	
	
}
