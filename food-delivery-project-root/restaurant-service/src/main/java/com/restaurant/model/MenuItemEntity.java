package com.restaurant.model;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "MENU_ITEMS")
public class MenuItemEntity implements Serializable {

	@Column(name = "menuitem_code")
	private Long menuitemCode;
	@Column(name = "description")
	private String description;
	@Column(name = "cost")
	private BigDecimal cost;
	@Column(name = "img_url")
	private String imgUrl;

	@Column(name = "restaurant_id")
	private Long restaurantId;

	public MenuItemEntity() {
		super();
	}

	public MenuItemEntity(String description, BigDecimal cost, String imgUrl) {
		super();
		this.description = description;
		this.cost = cost;
		this.imgUrl = imgUrl;
	}

	public BigDecimal getCost() {
		return cost;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public Long getMenuitemCode() {
		return menuitemCode;
	}

	public void setMenuitemCode(Long menuitemCode) {
		this.menuitemCode = menuitemCode;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public void setCost(BigDecimal cost) {
		this.cost = cost;
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	public Long getRestaurantId() {
		return restaurantId;
	}

	public void setRestaurantId(Long restaurantId) {
		this.restaurantId = restaurantId;
	}

}