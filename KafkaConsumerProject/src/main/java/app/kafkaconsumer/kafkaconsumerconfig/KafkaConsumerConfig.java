package app.kafkaconsumer.kafkaconsumerconfig;

import java.util.HashMap;
import java.util.Map;

import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;

@Configuration
@EnableKafka
public class KafkaConsumerConfig {
	
	@Value("${kafka.broker.address}")
	private String kafkaBrokerAddress;
	
	@Bean
	public ConsumerFactory<String, String> consumerFactory(){
		Map<String, Object> consumerConfigMap = new HashMap<String, Object>();
		consumerConfigMap.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, kafkaBrokerAddress);
		consumerConfigMap.put(ConsumerConfig.GROUP_ID_CONFIG, "consumer-group");
		consumerConfigMap.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG,StringDeserializer.class);
		consumerConfigMap.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
		
		return new DefaultKafkaConsumerFactory<>(consumerConfigMap);
	}
}
