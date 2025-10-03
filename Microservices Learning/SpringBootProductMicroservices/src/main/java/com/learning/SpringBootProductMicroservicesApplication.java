package com.learning;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.learning")
public class SpringBootProductMicroservicesApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootProductMicroservicesApplication.class, args);
	}

}
