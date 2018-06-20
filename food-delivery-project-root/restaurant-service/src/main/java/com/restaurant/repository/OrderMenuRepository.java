package com.restaurant.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.restaurant.model.MenuItemEntity;

public interface OrderMenuRepository extends JpaRepository<MenuItemEntity, Long> {

	List<MenuItemEntity> findAll();
}