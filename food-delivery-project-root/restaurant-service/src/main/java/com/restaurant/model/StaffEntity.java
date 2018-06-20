package com.restaurant.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "STAFF")
public class StaffEntity implements Serializable {
	private static final long serialVersionUID = 1L;
	private Long id;
	private String userid;
	private String password;

	@Enumerated(EnumType.STRING)
	private StaffDesignation designation;

	private RestaurantEntity restaurant;

	public StaffEntity() {
		super();
	}

	public StaffEntity(String userid, String password,StaffDesignation designation) {
		super();
		this.userid = userid;
		this.password = password;
		this.designation = designation;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	
	public StaffDesignation getDesignation() {
		return designation;
	}

	public void setDesignation(StaffDesignation designation) {
		this.designation = designation;
	}

	@ManyToOne
	@JoinColumn(name = "restaurant_id")
	public RestaurantEntity getRestaurant() {
		return restaurant;
	}

	public void setRestaurant(RestaurantEntity restaurant) {
		this.restaurant = restaurant;
	}

}