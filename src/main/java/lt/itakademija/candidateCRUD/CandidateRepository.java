package lt.itakademija.candidateCRUD;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import lt.itakademija.districtCRUD.DistrictEntity;

@Repository
public class CandidateRepository {

	@Autowired
	private EntityManager em;

	public CandidateEntity save(CandidateEntity c) {
		if (c.getId() == null) {
			em.persist(c);
			return c;
		} else {
			CandidateEntity merged = em.merge(c);
			em.persist(merged);
			return merged;
		}
	}

	public List<CandidateEntity> findAll() {
		return em.createQuery("SELECT c from CandidateEntity c").getResultList();
	}
	
}
