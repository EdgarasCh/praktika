package lt.itakademija.candidateCRUD;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import lt.itakademija.districtCRUD.DistrictEntity;
import lt.itakademija.districtCRUD.DistrictService;

@RestController
public class CandidateController {

	
	@Autowired
	private CandidateService service;

	@PostMapping("/api/candidate")
	public CandidateEntity createOrUpdateCandidate(@RequestBody CandidateEntity c) {
		return service.save(c);
	}

	@GetMapping("/api/candidate")
	public Iterable<CandidateEntity> candidates() {
		return service.findAll();
	}
}
