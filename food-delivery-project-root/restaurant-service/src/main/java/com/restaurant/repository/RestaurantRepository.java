package com.restaurant.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.restaurant.model.RestaurantEntity;

public interface RestaurantRepository extends JpaRepository<RestaurantEntity, Long> {

	List<RestaurantEntity> findAll();

	RestaurantEntity findByRestaurantId(Long restaurantId);

}