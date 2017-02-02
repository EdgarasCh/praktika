package lt.itakademija.party;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lt.itakademija.districtCRUD.DistrictEntity;

@Service
public class PartyService {

	@Autowired
	private PartyRepository repository;

	@Transactional
	public PartyEntity save(PartyEntity p) {
		return repository.save(p);
	}

	@Transactional(readOnly = true)
	public List<PartyEntity> findAll() {
		return repository.findAll();
	}
	
	@Transactional
	public PartyEntity delete(Long id) {
		return repository.delete(id);
	}

}
