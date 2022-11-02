package br.com.roadmap.volkswagen;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import br.com.roadmap.volkswagen.entities.Inovacao;

@SpringBootApplication
@EntityScan("br.com.roadmap.volkswagen.entities")

public class VolkswagenApplication {

	public static void main(String[] args) {
		SpringApplication.run(VolkswagenApplication.class, args);
		
	}

}
