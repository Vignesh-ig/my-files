package app.kafkaproducer.kafkaProducerController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/producer/{message}")
public class KafkaProducerController {
    
    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;
    
    @GetMapping
    public String publish(@PathVariable("message") String publishMessage) {
        kafkaTemplate.send("topic1", publishMessage);
        return "Message Published : " + publishMessage;
    }
}
