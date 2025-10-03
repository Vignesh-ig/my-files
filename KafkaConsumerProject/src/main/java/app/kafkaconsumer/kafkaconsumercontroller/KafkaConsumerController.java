package app.kafkaconsumer.kafkaconsumercontroller;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
public class KafkaConsumerController {
	
	@KafkaListener(topics="topic1", groupId="consumer-group")
	public void consume(String message) {
		System.out.println("Consumed Message : " + message);
	}
	
}
