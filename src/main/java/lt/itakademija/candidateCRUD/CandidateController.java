package lt.itakademija.candidateCRUD;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class CandidateController {

	@Autowired
	private CandidateService service;

	@PostMapping("/api/candidate")
	public void createOrUpdateCandidate(@RequestBody CandidateEntity c) {
		service.save(c);
	}

	@GetMapping("/api/candidate")
	public Iterable<CandidateEntity> candidates() {
		return service.findAll();
	}

	@DeleteMapping("/api/candidate/{id}")
	public CandidateEntity delete(@PathVariable Long id) {
		return service.delete(id);
	}

	@PostMapping("/api/candidate/uploud")
	@ResponseStatus(value = HttpStatus.CREATED)
	public void createOrUpdateCandidateFromCSV(@RequestParam("file") MultipartFile csvFile,
			@RequestParam("party-name") String partyName) {

		service.saveFromCSV(csvFile, partyName);

	}
}
