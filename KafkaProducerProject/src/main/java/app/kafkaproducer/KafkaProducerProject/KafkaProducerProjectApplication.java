package app.kafkaproducer.KafkaProducerProject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "app.kafkaproducer")
public class KafkaProducerProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(KafkaProducerProjectApplication.class, args);
	}

}
