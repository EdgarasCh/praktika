package lt.itakademija.candidateCRUD;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class CandidateRepository {

	@Autowired
	private EntityManager em;

	public void save(CandidateEntity c) {
		if (c.getId() == null) {
			em.persist(c);

		} else {
			CandidateEntity merged = em.merge(c);
			em.persist(merged);

		}
	}

	public List<CandidateEntity> findAll() {
		return em.createQuery("SELECT c from CandidateEntity c").getResultList();
	}

	public CandidateEntity delete(Long id) {
		CandidateEntity c = em.find(CandidateEntity.class, id);
		em.remove(c);
		return c;
	}
	


}
