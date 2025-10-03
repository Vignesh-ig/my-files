package app.kafkaconsumer.KafkaConsumerProject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "app.kafkaconsumer")
public class KafkaConsumerProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(KafkaConsumerProjectApplication.class, args);
	}

}
