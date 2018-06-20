package com.restaurant.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.restaurant.model.CustomerEntity;
import com.restaurant.model.RestaurantEntity;
import com.restaurant.model.StaffEntity;
import com.restaurant.repository.CustomerRepository;
import com.restaurant.repository.RestaurantRepository;
import com.restaurant.repository.StaffRepository;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private RestaurantRepository restaurentRepository;
	
	@Autowired
	private StaffRepository staffRepository;

	@Autowired
	private CustomerRepository customerRepository;
	@Override
	public RestaurantEntity save(RestaurantEntity restaurant) {
		return restaurentRepository.save(restaurant);		
	}
	@Override
	public void save(StaffEntity user) {
		staffRepository.save(user);
	}

	@Override
	public StaffEntity findStaffByUserid(String userid) {
		return staffRepository.findByUserid(userid);
	}

	@Override
	public CustomerEntity findCustomerByUserid(String userid) {
		return customerRepository.findByUserid(userid);
	}

	@Override
	public void save(CustomerEntity user) {
		customerRepository.save(user);
	}

	
}