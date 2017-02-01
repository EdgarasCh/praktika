package lt.itakademija.party;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import lt.itakademija.candidateCRUD.CandidateEntity;

@Repository
public class PartyRepository {

	@Autowired
	private EntityManager em;

	public PartyEntity save(PartyEntity p) {

		if (p.getPartyId() == null) {
			em.persist(p);
			return p;
		} else {
			PartyEntity merged = em.merge(p);
			em.persist(merged);
			return merged;
		}

	}

	public List<PartyEntity> findAll() {
		return em.createQuery("SELECT p from PartyEntity p").getResultList();
	}

	public PartyEntity delete(Long id) {
		PartyEntity p = em.find(PartyEntity.class, id);
		em.remove(p);
		return p;
	}

}
