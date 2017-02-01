package lt.itakademija.candidateCRUD;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;

import lt.itakademija.districtCRUD.DistrictEntity;

@Repository
public class CandidateRepository {

	@Autowired
	private EntityManager em;

	public CandidateEntity save(CandidateEntity c) {


		if (!findAll().contains(c)) {
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

	public CandidateEntity findCandidate(String personCode) {
		return em.find(CandidateEntity.class, personCode);
	}

	// Trina visus kandidatus kurie priklauso tam tikrai partijai kai trinama
	// partija trinamas ir jos sarasas(Partijos
	// kandidatu saraso trinimas)

	public int deleteCandidatesByPartyId(int partyId) {
		return em.createQuery("DELETE from CandidateEntity c WHERE c.partyId = :partyId")
				.setParameter("partyId", partyId).executeUpdate();

	}

	public CandidateEntity delete(Long id) {
		CandidateEntity c = em.find(CandidateEntity.class, id);
		em.remove(c);
		return c;
	}

}
