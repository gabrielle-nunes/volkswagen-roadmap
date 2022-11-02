package br.com.roadmap.volkswagen;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan("br.com.roadmap.volkswagen.entities")

public class VolkswagenApplication {

	public static void main(String[] args) {
		SpringApplication.run(VolkswagenApplication.class, args);
		
	}

}
