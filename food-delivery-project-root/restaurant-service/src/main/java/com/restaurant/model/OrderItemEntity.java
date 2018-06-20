package com.restaurant.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "ORDER_ITEMS")
public class OrderItemEntity implements Serializable {

	private static final long serialVersionUID = -42L;

	private Long id;

	@Column(name = "QUANTITY", nullable = false)
	private Integer quantity;

	private MenuItemEntity menuitem;

	@JsonIgnore
	private OrderEntity order;

	public OrderItemEntity() {
		super();
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	@OneToOne
	@JoinColumn(name = "menuitem_code")
	public MenuItemEntity getMenuitem() {
		return menuitem;
	}

	public void setMenuitem(MenuItemEntity menuitem) {
		this.menuitem = menuitem;
	}
	@ManyToOne
	@JoinColumn(name = "ORDER_ID")
	public OrderEntity getOrder() {
		return order;
	}

	public void setOrder(OrderEntity order) {
		this.order = order;
	}

}