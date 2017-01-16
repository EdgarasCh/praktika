package lt.itakademija.countyCRUD;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class CountyRepository {

	@Autowired
	private EntityManager em;

	public CountyEntity save(CountyEntity c) {
		if (c.getId() == null) {
			em.persist(c);
			return c;
		} else {
			CountyEntity merged = em.merge(c);
			em.persist(merged);
			return merged;
		}
	}

	public List<CountyEntity> findAll() {
		return em.createQuery("SELECT c from CountyEntity c").getResultList();
	}

	public CountyEntity delete(Long id) {
		CountyEntity c = em.find(CountyEntity.class, id);
		em.remove(c);
		return c;
	}

}
