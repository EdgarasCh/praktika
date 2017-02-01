package lt.itakademija.candidateCRUD;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.multipart.MultipartFile;

@Service
public class CandidateService {

	@Autowired
	private CandidateRepository repository;

	@Transactional
	public void save(CandidateEntity c) {
		repository.save(c);
	}

	@Transactional(readOnly = true)
	public List<CandidateEntity> findAll() {
		return repository.findAll();
	}

	@Transactional(readOnly = true)
	public CandidateEntity findCandidate(String personCode) {
		return repository.findCandidate(personCode);
	}

	@Transactional
	public CandidateEntity delete(Long id) {
		return repository.delete(id);
	}


	// Trina visus kandidatus kurie priklauso tam tikrai partijai(Partijos
	// kandidatu saraso trinimas)
	@Transactional
	public int deleteCandidatesByPartyId(int id) {
		return repository.deleteCandidatesByPartyId(id);
	}

	@Transactional
	public void saveMultiPartyListFromCSV(MultipartFile CSVfile, int partyId) {

		File file = new File(CSVfile.getOriginalFilename());
		try {
			file.createNewFile();
			FileOutputStream fos = new FileOutputStream(file);
			fos.write(CSVfile.getBytes());
			fos.close();
		} catch (IOException e) {

			e.printStackTrace();
		}
		String data = "";
		String[] values = {};
		String firsName = "";
		String lastName = "";
		String dateString = "";

		String personCode = "";
		String description = "";
		Long countyId = 0L;


		try (BufferedReader br = new BufferedReader(new FileReader(file))) {

			while ((data = br.readLine()) != null) {

				values = data.split(",(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)", -1);

				firsName = values[0];
				lastName = values[1];
				dateString = values[2];

				personCode = values[3];
				description = values[4];

				repository.save(new CandidateEntity(firsName, lastName, dateString, personCode, partyId, countyId,
						description));
			}

		} catch (IOException e) {

			e.printStackTrace();
		}
	}
	
	
	@Transactional
	public void saveSinglePartyListFromCSV(MultipartFile CSVfile, Long countyId) {

		File file = new File(CSVfile.getOriginalFilename());
		try {
			file.createNewFile();
			FileOutputStream fos = new FileOutputStream(file);
			fos.write(CSVfile.getBytes());
			fos.close();
		} catch (IOException e) {

			e.printStackTrace();
		}
		String data = "";
		String[] values = {};
		String firsName = "";
		String lastName = "";
		String dateString = "";
		String personCode = "";
		String description = "";
		Integer partyId = 0;

		try (BufferedReader br = new BufferedReader(new FileReader(file))) {

			while ((data = br.readLine()) != null) {

				values = data.split(",(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)", -1);

				firsName = values[0];
				lastName = values[1];
				dateString = values[2];
				personCode = values[3];
				description = values[4];

				repository.save(new CandidateEntity(firsName, lastName, dateString, personCode, partyId, countyId,
						description));
			}

		} catch (IOException e) {

			e.printStackTrace();
		}
	}



}
