package com.restaurant.dto;

import java.io.Serializable;

import com.restaurant.model.OrderEntity;

public class OrderData implements Serializable {
	private static final long serialVersionUID = 1L;
	private String taskId;
	private OrderEntity order;

	public String getTaskId() {
		return taskId;
	}

	public void setTaskId(String taskId) {
		this.taskId = taskId;
	}

	public OrderEntity getOrder() {
		return order;
	}

	public void setOrder(OrderEntity order) {
		this.order = order;
	}

}
