package com.restaurant.dto;

import java.io.Serializable;
import java.util.List;

public class OrderRequest implements Serializable {
	private static final long serialVersionUID = 1L;

	private String userid;
	private Long restaurantId;
	private List<OrderItem> items;

	private Address address;
	
	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public Long getRestaurantId() {
		return restaurantId;
	}

	public void setRestaurantId(Long restaurantId) {
		this.restaurantId = restaurantId;
	}

	public List<OrderItem> getItems() {
		return items;
	}

	public void setItems(List<OrderItem> items) {
		this.items = items;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

}
