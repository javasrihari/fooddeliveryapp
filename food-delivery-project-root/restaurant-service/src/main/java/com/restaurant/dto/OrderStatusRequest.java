package com.restaurant.dto;

import java.io.Serializable;
import java.util.List;

public class OrderStatusRequest implements Serializable {
	private static final long serialVersionUID = 1L;

	private String userid;
	private Long orderId;
	private String orderStatus;
	private String taskId;
	private Address currentAddressLocation;

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public Long getOrderId() {
		return orderId;
	}

	public void setOrderId(Long orderId) {
		this.orderId = orderId;
	}

	public String getOrderStatus() {
		return orderStatus;
	}

	public void setOrderStatus(String orderStatus) {
		this.orderStatus = orderStatus;
	}

	public String getTaskId() {
		return taskId;
	}

	public void setTaskId(String taskId) {
		this.taskId = taskId;
	}

	public Address getCurrentAddressLocation() {
		return currentAddressLocation;
	}

	public void setCurrentAddressLocation(Address currentAddressLocation) {
		this.currentAddressLocation = currentAddressLocation;
	}

}
