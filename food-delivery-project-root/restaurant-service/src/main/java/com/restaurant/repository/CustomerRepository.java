package com.restaurant.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.restaurant.model.CustomerEntity;

public interface CustomerRepository extends JpaRepository<CustomerEntity, Long> {

	CustomerEntity findByUserid(String userid);

}