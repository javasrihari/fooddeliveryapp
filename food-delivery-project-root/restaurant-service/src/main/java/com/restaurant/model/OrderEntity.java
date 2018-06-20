package com.restaurant.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "ORDERS")
public class OrderEntity implements Serializable {

	private static final long serialVersionUID = 1L;

	@Column(name = "ORDER_ID")
	private Long id;

	private List<OrderItemEntity> items;

	@Column(name = "CREATED_DATE", nullable = false)
	private Date createdDate;

	
	private CustomerEntity customer;

	private DeliveryAddressEntity deliveryAddress;

	private AddressLocationEntity currentAddressLocation;

	@Column(name = "ORDER_STATUS")
	private String status;
	
	public OrderEntity() {
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

	public OrderItemEntity addMenuItem(MenuItemEntity menuitem, Integer quantity) {
		OrderItemEntity orderItem = new OrderItemEntity();
		orderItem.setMenuitem(menuitem);
		orderItem.setQuantity(quantity);
		orderItem.setOrder(this);
		if (items == null) {
			items = new ArrayList<>();
		}
		items.add(orderItem);
		return orderItem;
	}

	@OneToMany(cascade = { CascadeType.PERSIST }, fetch = FetchType.LAZY, mappedBy = "order")
	public List<OrderItemEntity> getItems() {
		return items;
	}

	public void setItems(List<OrderItemEntity> items) {
		this.items = items;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	@OneToOne
	@JoinColumn(name = "userid")
	public CustomerEntity getCustomer() {
		return customer;
	}

	public void setCustomer(CustomerEntity customer) {
		this.customer = customer;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@OneToOne(cascade = { CascadeType.PERSIST })
	@JoinColumn(name = "addressId")
	public DeliveryAddressEntity getDeliveryAddress() {
		return deliveryAddress;
	}

	public void setDeliveryAddress(DeliveryAddressEntity deliveryAddress) {
		this.deliveryAddress = deliveryAddress;
	}
	@OneToOne(cascade = { CascadeType.ALL })
	@JoinColumn(name = "addressLocationId")
	public AddressLocationEntity getCurrentAddressLocation() {
		return currentAddressLocation;
	}

	public void setCurrentAddressLocation(AddressLocationEntity currentAddressLocation) {
		this.currentAddressLocation = currentAddressLocation;
	}

}