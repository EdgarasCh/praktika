package lt.itakademija.representative;

import java.util.List;
import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Repository;

@Repository
public class RepresentativeRepository {

	@Autowired
	private EntityManager em;

	public RepresentativeEntity save(RepresentativeEntity d) {
		if (d.getId() == null) {
			em.persist(d);
			return d;
		} else {
			RepresentativeEntity merged = em.merge(d);
			em.persist(merged);
			return merged;
		}
	}

	public List<RepresentativeEntity> findAll() {
		return em.createQuery("SELECT d from DistrictEntity d").getResultList();
	}



	public RepresentativeEntity delete(Long id) {
		RepresentativeEntity c = em.find(RepresentativeEntity.class, id);
		em.remove(c);
		return c;
	}

}
