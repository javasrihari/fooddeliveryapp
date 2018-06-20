package com.restaurant.app;

import java.io.IOException;

import javax.sql.DataSource;

import org.activiti.spring.SpringAsyncExecutor;
import org.activiti.spring.SpringProcessEngineConfiguration;
import org.activiti.spring.boot.AbstractProcessEngineAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.PlatformTransactionManager;

@Configuration
public class ActivitiConfiguration extends AbstractProcessEngineAutoConfiguration {

	public DataSource activitiDataSource() {
		return DataSourceBuilder.create().url("jdbc:h2:mem:activiti").username("activiti")
				.driverClassName("org.h2.Driver").build();
	}

	@Bean
	public SpringProcessEngineConfiguration springProcessEngineConfiguration(
			PlatformTransactionManager transactionManager, SpringAsyncExecutor springAsyncExecutor) throws IOException {

		SpringProcessEngineConfiguration config = baseSpringProcessEngineConfiguration(activitiDataSource(),
				transactionManager, springAsyncExecutor);
		config.setMailServerHost("smtp.gmail.com");
		config.setMailServerPort(587);
		config.setMailServerUsername("javasrihari@gmail.com");
		config.setMailServerPassword("11111111");

		return config;
	}
}