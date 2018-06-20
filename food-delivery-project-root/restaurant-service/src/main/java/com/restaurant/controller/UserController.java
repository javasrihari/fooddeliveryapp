package com.restaurant.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.restaurant.dto.LoginRequest;
import com.restaurant.dto.Response;
import com.restaurant.dto.UserProfile;
import com.restaurant.model.CustomerEntity;
import com.restaurant.model.StaffEntity;
import com.restaurant.model.UserType;
import com.restaurant.service.UserService;

@Controller
@RequestMapping(value = "/user/")
@CrossOrigin
public class UserController {
	@Autowired
	private UserService userService;

	@RequestMapping(value = "login", method = RequestMethod.POST)
	public @ResponseBody Response login(@RequestBody LoginRequest loginRequest) {
		Response returnResponse = new Response();

		if (UserType.CUSTOMER.name().equalsIgnoreCase(loginRequest.getUserType())) {
			CustomerEntity customer = userService.findCustomerByUserid(loginRequest.getUserid());
			if (customer!=null&&customer.getPassword().equals(loginRequest.getPassword())) {
				returnResponse.setStatus(Response.SUCCESS);
				UserProfile userProfile = new UserProfile(customer);
				returnResponse.setData(userProfile);
				return returnResponse;

			}

		} else if (UserType.STAFF.name().equalsIgnoreCase(loginRequest.getUserType())) {
			StaffEntity staff = userService.findStaffByUserid(loginRequest.getUserid());
			if (staff!=null && staff.getPassword().equals(loginRequest.getPassword())) {
				returnResponse.setStatus(Response.SUCCESS);
				UserProfile userProfile = new UserProfile(staff);
				returnResponse.setData(userProfile);
				return returnResponse;

			}

		}
		returnResponse.setStatus(Response.FAILURE);
		returnResponse.setError("User not found");
		return returnResponse;
	}

}