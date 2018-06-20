package com.restaurant.service;

import com.restaurant.model.CustomerEntity;
import com.restaurant.model.RestaurantEntity;
import com.restaurant.model.StaffEntity;

public interface UserService {

	StaffEntity findStaffByUserid(String userid);

	CustomerEntity findCustomerByUserid(String userid);

	RestaurantEntity save(RestaurantEntity restaurant);

	void save(StaffEntity user);

	void save(CustomerEntity user);

}
