package com.restaurant.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.restaurant.model.OrderEntity;

public interface OrderRepository extends JpaRepository<OrderEntity, Long> {
	OrderEntity findById(Long orderId);

}