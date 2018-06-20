package com;

import java.math.BigDecimal;

import org.activiti.engine.IdentityService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import com.restaurant.model.CustomerEntity;
import com.restaurant.model.MenuItemEntity;
import com.restaurant.model.RestaurantEntity;
import com.restaurant.model.StaffDesignation;
import com.restaurant.model.StaffEntity;
import com.restaurant.service.OrderService;
import com.restaurant.service.UserService;

@SpringBootApplication
public class Application {

	@Configuration
	static class SecurityConfiguration extends WebSecurityConfigurerAdapter {
		protected void configure(HttpSecurity http) throws Exception {
			http.authorizeRequests().antMatchers("/**").permitAll().and().csrf().disable();
		}
	}

	

	@Bean
	CommandLineRunner init(IdentityService identityService,UserService userService, OrderService orderService) {
		return new CommandLineRunner() {
			@Override
			public void run(String... strings) throws Exception {

				// create Restaurant
				RestaurantEntity restaurant = new RestaurantEntity();
				restaurant.setName("Gazebo, Dubai");
				restaurant = userService.save(restaurant);

				// create users
				StaffEntity admin = new StaffEntity("admin", "123", StaffDesignation.KITCHEN_STAFF);
				admin.setRestaurant(restaurant);
				StaffEntity delivery = new StaffEntity("delivery", "123", StaffDesignation.DELIVERY_STAFF);
				delivery.setRestaurant(restaurant);
				userService.save(admin);
				userService.save(delivery);

				CustomerEntity customer = new CustomerEntity("customer", "123","javasrihari@gmail.com");
				CustomerEntity guest = new CustomerEntity("guest", "123","javasrihari@gmail.com");
				userService.save(customer);
				userService.save(guest);

				// create products

				MenuItemEntity p1 = new MenuItemEntity("Biryani", new BigDecimal("20"), "/images/p1.jpeg");
				p1.setRestaurantId(restaurant.getRestaurantId());
				MenuItemEntity p2 = new MenuItemEntity("Chicken Masala", new BigDecimal("10"), "/images/p2.jpeg");
				p2.setRestaurantId(restaurant.getRestaurantId());
				MenuItemEntity p3 = new MenuItemEntity("Sandwich", new BigDecimal("5"), "/images/p3.jpeg");
				p3.setRestaurantId(restaurant.getRestaurantId());

				MenuItemEntity p4 = new MenuItemEntity("Burger", new BigDecimal("5"), "/images/p4.jpeg");
				p4.setRestaurantId(restaurant.getRestaurantId());

				MenuItemEntity p5 = new MenuItemEntity("samosa", new BigDecimal("5"), "/images/p5.jpeg");
				p5.setRestaurantId(restaurant.getRestaurantId());

				orderService.saveMenuItem(p1);
				orderService.saveMenuItem(p2);
				orderService.saveMenuItem(p3);
				orderService.saveMenuItem(p4);
				orderService.saveMenuItem(p5);

			}
			
		};

	}

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}


}