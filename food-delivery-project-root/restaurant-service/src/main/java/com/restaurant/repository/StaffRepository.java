package com.restaurant.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.restaurant.model.StaffEntity;

public interface StaffRepository extends JpaRepository<StaffEntity, Long> {

	StaffEntity findByUserid(String userid);

}