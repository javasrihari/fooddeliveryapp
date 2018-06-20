package com.restaurant.model;

public enum OrderStatus {

	PLACED,ACCEPTED, REJECTED, ORDER_READY, ORDER_READY_REJECTED, ORDER_IN_DELIVERY, ORDER_IN_DELIVERY_REJECTED, ORDER_DELIVERED, ORDER_NOT_DELIVERED;

	public boolean equalsIgnoreCase(String orderStatus) {
		return this.name().equalsIgnoreCase(orderStatus);
	}

}
