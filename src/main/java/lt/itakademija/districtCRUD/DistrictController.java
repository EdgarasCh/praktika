package lt.itakademija.districtCRUD;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DistrictController {

	@Autowired
	private DistrictService service;

	@PostMapping("/api/district")
	public DistrictEntity createOrUpdateDistrict(@RequestBody DistrictEntity d) {
		return service.save(d);
	}

	@GetMapping("/api/district")
	public Iterable<DistrictEntity> districts() {
		return service.findAll();
	}

}