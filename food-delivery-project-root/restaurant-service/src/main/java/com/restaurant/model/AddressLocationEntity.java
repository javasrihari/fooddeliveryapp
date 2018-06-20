package com.restaurant.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ADDRESS_LOCATION")
public class AddressLocationEntity implements Serializable {

	private static final long serialVersionUID = 1L;
	private Long addressLocationId;
	private String geolocation;
	private String latitude;
	private String longitude;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public Long getAddressLocationId() {
		return addressLocationId;
	}

	public void setAddressLocationId(Long addressLocationId) {
		this.addressLocationId = addressLocationId;
	}

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