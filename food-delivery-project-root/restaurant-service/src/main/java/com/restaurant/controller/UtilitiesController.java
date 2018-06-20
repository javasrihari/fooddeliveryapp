package com.restaurant.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import com.restaurant.dto.Response;
import com.restaurant.service.OrderService;

@Controller
@CrossOrigin
public class UtilitiesController {
	@Autowired
	private OrderService orderService;

	@GetMapping("/menu/restaurant/{restaurantId}")
	public @ResponseBody Response getMenu(@PathVariable("restaurantId") Long restaurantId) {
		Response returnResponse = new Response();
		returnResponse.setStatus(Response.SUCCESS);
		returnResponse.setData(orderService.findByRestaurantId(restaurantId));
		return returnResponse;
	}

	@GetMapping("/restaurants")
	public @ResponseBody Response getRestaurants() {

		Response returnResponse = new Response();
		returnResponse.setStatus(Response.SUCCESS);
		returnResponse.setData(orderService.findRestaurants());
		return returnResponse;
	}

}