package com.learning;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class HomeController {

	@Autowired
	private RestTemplate resTemplate;
	
	@GetMapping("/home")
	public String home() {
		
		String products = resTemplate.getForObject("http://localhost:8082/products", String.class);
		return products;
		
	}
}
