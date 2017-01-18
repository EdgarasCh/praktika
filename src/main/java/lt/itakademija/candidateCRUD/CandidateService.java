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

	@Transactional
	public CandidateEntity delete(Long id) {
		return repository.delete(id);
	}

	@Transactional
	public void saveFromCSV(MultipartFile CSVfile, String partyName) {

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
		String description = "";

		try (BufferedReader br = new BufferedReader(new FileReader(file))) {

			while ((data = br.readLine()) != null) {

				values = data.split(",(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)", -1);

				firsName = values[0];
				lastName = values[1];
				dateString = values[2];
				description = values[3];

				repository.save(new CandidateEntity(firsName, lastName, parseDate(dateString), partyName, description));
			}

		} catch (IOException e) {

			e.printStackTrace();
		}

	}

	public Date parseDate(String dateString) {
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		Date date = null;

		try {

			date = dateFormat.parse(dateString);

		} catch (ParseException e) {
			e.printStackTrace();
		}

		return date;
	}

}
