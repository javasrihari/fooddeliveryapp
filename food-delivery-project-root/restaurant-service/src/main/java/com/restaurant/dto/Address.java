package com.restaurant.dto;

import java.io.Serializable;

import com.restaurant.model.OrderEntity;

public class Address implements Serializable {
	private static final long serialVersionUID = 1L;
	private String geolocation;
	private String latitude;
	private String longitude;

	
	public String getGeolocation() {
		return geolocation;
	}

	public void setGeolocation(String geolocation) {
		this.geolocation = geolocation;
	}

	public String getLatitude() {
		return latitude;
	}

	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}

	public String getLongitude() {
		return longitude;
	}

	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}

}
