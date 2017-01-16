package lt.itakademija.candidateCRUD;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CandidateService {

	@Autowired
	private CandidateRepository repository;

	@Transactional
	public CandidateEntity save(CandidateEntity c) {
		return repository.save(c);
	}

	@Transactional(readOnly = true)
	public List<CandidateEntity> findAll() {
		return repository.findAll();
	}

	@Transactional
	public CandidateEntity delete(Long id) {
		return repository.delete(id);
	}

}
