package lt.itakademija.candidateCRUD;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import org.springframework.transaction.annotation.Transactional;


import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestHeader;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class CandidateController {

	@Autowired
	private CandidateService service;

	@PostMapping("/api/candidate")

	public CandidateEntity  createOrUpdateCandidate(@RequestBody CandidateEntity c) {
		return service.save(c);
	}

	@GetMapping("/api/candidate")
	public Iterable<CandidateEntity> candidates() {
		return service.findAll();
	}

	@GetMapping("/api/candidate/{personCode}")
	public CandidateEntity findCandidate(@PathVariable String personCode) {
		return service.findCandidate(personCode);
	}
	
	// Trina visus kandidatus kurie priklauso tam tikrai partijai(Partijos
	// kandidatu saraso trinimas)
	@PostMapping("/api/candidate/party/{partyId}")
	public int deleteCandidatesByPartyId(@PathVariable int partyId) {
		return service.deleteCandidatesByPartyId(partyId);
	}
	

	@DeleteMapping("/api/candidate/{id}")
	public CandidateEntity delete(@PathVariable Long id) {
		return service.delete(id);
	}


	@PostMapping("/api/candidate/multiPartyListUpload")
	@ResponseStatus(value = HttpStatus.CREATED)
	public void createOrUpdateMultiPartyCandidateListFromCSV(@RequestParam("file") MultipartFile csvFile,
			@RequestParam("partyId") int partyId) {
		
		
		service.saveMultiPartyListFromCSV(csvFile, partyId);
	}
	
	
	@PostMapping("/api/candidate/singlePartyListUpload")
	@ResponseStatus(value = HttpStatus.CREATED)
	public void createOrUpdateSinglePartyCandidateListFromCSV(@RequestParam("file") MultipartFile csvFile,
			@RequestParam("countyId") Long countyId) {
		
		
		service.saveSinglePartyListFromCSV(csvFile, countyId);
	}



}
