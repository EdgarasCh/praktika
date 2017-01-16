package lt.itakademija.districtCRUD;

import java.util.List;
import javax.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class DistrictRepository {

	@Autowired
	private EntityManager em;

	public DistrictEntity save(DistrictEntity d) {
		if (d.getId() == null) {
			em.persist(d);
			return d;
		} else {
			DistrictEntity merged = em.merge(d);
			em.persist(merged);
			return merged;
		}
	}

	public List<DistrictEntity> findAll() {
		return em.createQuery("SELECT d from DistrictEntity d").getResultList();
	}

	public DistrictEntity delete(Long id) {
		DistrictEntity c = em.find(DistrictEntity.class, id);
		em.remove(c);
		return c;
	}

}
