package com.restaurant.dto;

import java.io.Serializable;

import com.restaurant.model.CustomerEntity;
import com.restaurant.model.StaffEntity;

public class UserProfile implements Serializable {

	private String username;

	public UserProfile(CustomerEntity user) {
		super();
		this.username = user.getUserid();
	}
	public UserProfile(StaffEntity user) {
		super();
		this.username = user.getUserid();
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

}
