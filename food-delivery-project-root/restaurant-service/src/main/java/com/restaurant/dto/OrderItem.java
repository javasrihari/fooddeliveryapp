package com.restaurant.dto;

import java.io.Serializable;

public class OrderItem implements Serializable {

	private static final long serialVersionUID = -42L;

	private Integer quantity;

	private Long menuitemCode;

	public OrderItem() {
		super();
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public Long getMenuitemCode() {
		return menuitemCode;
	}

	public void setMenuitemCode(Long menuitemCode) {
		this.menuitemCode = menuitemCode;
	}

}