package com.restaurant.service;

import java.util.List;

import org.activiti.engine.delegate.DelegateExecution;
import org.activiti.engine.runtime.ProcessInstance;

import com.restaurant.dto.OrderRequest;
import com.restaurant.dto.OrderStatusRequest;
import com.restaurant.model.MenuItemEntity;
import com.restaurant.model.OrderEntity;
import com.restaurant.model.RestaurantEntity;

public interface OrderService {

	Long placeOrder(OrderRequest loginRequest) throws Exception;

	List<RestaurantEntity> findRestaurants();

	void saveMenuItem(MenuItemEntity menuitem);

	RestaurantEntity findByRestaurantId(Long restaurantId);

	ProcessInstance launchOrderProcess(OrderEntity orderEntity);

	void processOrderNotifications(DelegateExecution execution);

	void updateOrder(OrderStatusRequest orderRequest) throws Exception;
	
	OrderEntity getOrder(Long orderId);

	List<OrderEntity> listOrders(String userid);

	void updateOrderCurrentLocation(OrderStatusRequest orderRequest) throws Exception;

}
