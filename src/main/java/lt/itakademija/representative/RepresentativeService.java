package lt.itakademija.representative;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class RepresentativeService {

	@Autowired
	private RepresentativeRepository repository;

	@Transactional
	public RepresentativeEntity save(RepresentativeEntity p) {
		return repository.save(p);
	}

	@Transactional(readOnly = true)
	public List<RepresentativeEntity> findAll() {
		return repository.findAll();
	}
	


	@Transactional
	public RepresentativeEntity delete(Long id) {
		return repository.delete(id);
	}
}
