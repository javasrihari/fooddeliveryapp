package com.restaurant.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.activiti.engine.TaskService;
import org.activiti.engine.task.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.restaurant.dto.OrderData;
import com.restaurant.dto.OrderRequest;
import com.restaurant.dto.OrderStatusRequest;
import com.restaurant.dto.Response;
import com.restaurant.model.OrderEntity;
import com.restaurant.service.OrderService;

@Controller
@CrossOrigin
public class OrderController {

	@Autowired
	private OrderService orderService;

	@Autowired
	private TaskService taskService;

	@RequestMapping(value = "/order", method = RequestMethod.POST)
	public @ResponseBody Response login(@RequestBody OrderRequest orderRequest) {
		Response returnResponse = new Response();
		try {
			Long orderId = orderService.placeOrder(orderRequest);
			Map<String,Object> data=new HashMap<>();
			data.put("orderId", orderId);
			data.put("message", "Your order has been placed, Order Id#" + orderId);
			returnResponse.setData(data);
			returnResponse.setStatus(Response.SUCCESS);
		} catch (Exception e) {
			e.printStackTrace();
			returnResponse.setStatus(Response.FAILURE);
			returnResponse.setError(e.getMessage());
		}

		return returnResponse;
	}

	@RequestMapping(value = "/order", method = RequestMethod.PUT)
	public @ResponseBody Response chnageStatus(@RequestBody OrderStatusRequest orderRequest) {
		Response returnResponse = new Response();
		try {
			orderService.updateOrder(orderRequest);
			returnResponse.setData("order status chnaged to "+orderRequest.getOrderStatus());
			returnResponse.setStatus(Response.SUCCESS);
		} catch (Exception e) {
			e.printStackTrace();
			returnResponse.setStatus(Response.FAILURE);
			returnResponse.setError(e.getMessage());
		}

		return returnResponse;
	}
	@RequestMapping(value = "/order/currentlocation", method = RequestMethod.PUT)
	public @ResponseBody Response saveOrderCurrentLocation(@RequestBody OrderStatusRequest orderRequest) {
		Response returnResponse = new Response();
		try {
			orderService.updateOrderCurrentLocation(orderRequest);
			returnResponse.setData("order current location chnaged to "+orderRequest.getCurrentAddressLocation());
			returnResponse.setStatus(Response.SUCCESS);
		} catch (Exception e) {
			e.printStackTrace();
			returnResponse.setStatus(Response.FAILURE);
			returnResponse.setError(e.getMessage());
		}

		return returnResponse;
	}

	@GetMapping("/order/{id}")
	public @ResponseBody Response getOrder(@PathVariable("id") Long orderId) {
		Response returnResponse = new Response();
		OrderEntity order = orderService.getOrder(orderId);
		List<Task> taskList = taskService.createTaskQuery().list();
		String taskId = null;
		for (Task task : taskList) {
			OrderEntity taskOrder = (OrderEntity) taskService.getVariable(task.getId(), "order");
			if (taskOrder.getId().equals(orderId))
			{
				System.out.println("Found pending task" + task);
				taskId = task.getId();
				break;
			}
		}
		OrderData orderData = new OrderData();
		orderData.setTaskId(taskId);
		returnResponse.setData(orderData);
		orderData.setOrder(order);
		returnResponse.setStatus(Response.SUCCESS);
		return returnResponse;

	}

	@GetMapping("/order/list/{userid}")
	public @ResponseBody Response getOrderList(@PathVariable("userid") String userid) {
		Response returnResponse = new Response();
		List<OrderEntity> orderList = orderService.listOrders(userid);
		returnResponse.setData(orderList);
		returnResponse.setStatus(Response.SUCCESS);
		return returnResponse;

	}
}