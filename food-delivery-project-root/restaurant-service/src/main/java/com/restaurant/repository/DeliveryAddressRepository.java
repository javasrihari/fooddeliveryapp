package com.restaurant.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.restaurant.model.DeliveryAddressEntity;

public interface DeliveryAddressRepository extends JpaRepository<DeliveryAddressEntity, Long> {


}