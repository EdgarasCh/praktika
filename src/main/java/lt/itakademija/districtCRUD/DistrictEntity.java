package lt.itakademija.districtCRUD;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public final class DistrictEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String districtName;
	private String districtAddress;
	private int districtElectors;

	public DistrictEntity() {
	}

	public DistrictEntity(String districtName, String districtAddress, int districtElectors) {
		this.districtName = districtName;
		this.districtAddress = districtAddress;
		this.districtElectors = districtElectors;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDistrictName() {
		return districtName;
	}

	public void setDistrictName(String districtName) {
		this.districtName = districtName;
	}

	public String getDistrictAddress() {
		return districtAddress;
	}

	public void setDistrictAddress(String districtAddress) {
		this.districtAddress = districtAddress;
	}

	public int getDistrictElectors() {
		return districtElectors;
	}

	public void setDistrictElectors(int districtElectors) {
		this.districtElectors = districtElectors;
	}

}
