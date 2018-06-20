package com.restaurant.service;

import java.util.Calendar;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.activiti.engine.RuntimeService;
import org.activiti.engine.TaskService;
import org.activiti.engine.delegate.DelegateExecution;
import org.activiti.engine.runtime.ProcessInstance;
import org.activiti.engine.task.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.restaurant.dto.OrderItem;
import com.restaurant.dto.OrderRequest;
import com.restaurant.dto.OrderStatusRequest;
import com.restaurant.model.AddressLocationEntity;
import com.restaurant.model.CustomerEntity;
import com.restaurant.model.DeliveryAddressEntity;
import com.restaurant.model.MenuItemEntity;
import com.restaurant.model.OrderEntity;
import com.restaurant.model.OrderStatus;
import com.restaurant.model.RestaurantEntity;
import com.restaurant.repository.CustomerRepository;
import com.restaurant.repository.DeliveryAddressRepository;
import com.restaurant.repository.OrderMenuRepository;
import com.restaurant.repository.OrderRepository;
import com.restaurant.repository.RestaurantRepository;
import com.restaurant.repository.StaffRepository;

@Service("orderService")
public class OrderServiceImpl implements OrderService {

	@Autowired
	private RuntimeService runtimeService;

	@Autowired
	private TaskService taskService;

	@Autowired
	private RestaurantRepository restaurentRepository;

	@Autowired
	private CustomerRepository customerRepository;

	@Autowired
	private StaffRepository staffRepository;

	@Autowired
	private OrderRepository orderRepository;

	@Autowired
	private RestaurantRepository restaurantRepository;

	@Autowired
	private OrderMenuRepository orderMenuRepository;

	@Autowired
	private DeliveryAddressRepository deliveryAddressRepository;

	@Override
	public ProcessInstance launchOrderProcess(OrderEntity orderEntity) {
		 Map<String, Object> variables=new HashMap<>(); 
		 variables.put("order", orderEntity);
		 variables.put("email", orderEntity.getCustomer().getEmail());
		return runtimeService.startProcessInstanceByKey("orderProcess", variables);
	}

	@Override
	public void saveMenuItem(MenuItemEntity product) {
		orderMenuRepository.save(product);
	}

	@Override
	public List<RestaurantEntity> findRestaurants() {
		return restaurantRepository.findAll();
	}

	@Override
	public RestaurantEntity findByRestaurantId(Long restaurantId) {
		return restaurantRepository.findByRestaurantId(restaurantId);
	}

	@Override
	public Long placeOrder(OrderRequest loginRequest) throws Exception {

		RestaurantEntity restaurant = restaurantRepository.findByRestaurantId(loginRequest.getRestaurantId());
		OrderEntity orderEntity = validateOrderItems(loginRequest, restaurant);

		orderEntity = orderRepository.save(orderEntity);
		launchOrderProcess(orderEntity);

		return orderEntity.getId();
	}

	private OrderEntity validateOrderItems(OrderRequest loginRequest, RestaurantEntity restaurant) throws Exception {
		OrderEntity orderEntity = new OrderEntity();
		orderEntity.setStatus(OrderStatus.PLACED.name());
		CustomerEntity customerEntity = customerRepository.findByUserid(loginRequest.getUserid());
		orderEntity.setCustomer(customerEntity);
		DeliveryAddressEntity address = new DeliveryAddressEntity();
		address.setGeolocation(loginRequest.getAddress().getGeolocation());
		address.setLatitude(loginRequest.getAddress().getLatitude());
		address.setLongitude(loginRequest.getAddress().getLongitude());
		orderEntity.setDeliveryAddress(address);
		orderEntity.setCreatedDate(Calendar.getInstance().getTime());
		Map<Long, MenuItemEntity> itemMap = getOrderMenuItemMap(restaurant);
		for (OrderItem item : loginRequest.getItems()) {
			MenuItemEntity menuitem = itemMap.get(item.getMenuitemCode());
			if (menuitem != null) {
				orderEntity.addMenuItem(menuitem, item.getQuantity());
			} else {
				throw new Exception("Invalid Order Item");
			}
		}

		return orderEntity;

	}

	private Map<Long, MenuItemEntity> getOrderMenuItemMap(RestaurantEntity restaurant) {
		Map<Long, MenuItemEntity> itemMap = new HashMap<>();
		for (MenuItemEntity item : restaurant.getMenuitems()) {
			itemMap.put(item.getMenuitemCode(), item);
		}
		return itemMap;
	}

	@Override
	public void processOrderNotifications(DelegateExecution execution) {
		System.out.println(execution.getVariable("order"));
		System.out.println("Successfully sent SMS to Staff");
	}

	@Override
	public void updateOrder(OrderStatusRequest orderRequest) throws Exception {
		Task task = taskService.createTaskQuery().taskId(orderRequest.getTaskId()).singleResult();
		if(task==null)
			throw new Exception("Invalid taskId");
		System.out.println("processing Task:" + task);
		boolean taskCompleted = false;
		OrderEntity orderEntity = (OrderEntity) taskService.getVariable(task.getId(), "order");
		String currentStatus = orderEntity.getStatus();
		if (OrderStatus.PLACED.equalsIgnoreCase(currentStatus)
				&& OrderStatus.ACCEPTED.equalsIgnoreCase(orderRequest.getOrderStatus())) {
			completeTask(task, orderRequest, orderEntity, Collections.singletonMap("orderAccepted", true));
			taskCompleted = true;
		} else if (OrderStatus.PLACED.equalsIgnoreCase(currentStatus)
				&& OrderStatus.REJECTED.equalsIgnoreCase(orderRequest.getOrderStatus())) {
			completeTask(task, orderRequest, orderEntity, Collections.singletonMap("orderAccepted", false));
			taskCompleted = true;
		}
		if (OrderStatus.ACCEPTED.equalsIgnoreCase(currentStatus)
				&& OrderStatus.ORDER_READY.equalsIgnoreCase(orderRequest.getOrderStatus())) {
			completeTask(task, orderRequest, orderEntity, Collections.singletonMap("orderReady", true));
			taskCompleted = true;
		} else if (OrderStatus.ACCEPTED.equalsIgnoreCase(currentStatus)
				&& OrderStatus.ORDER_READY_REJECTED.equalsIgnoreCase(orderRequest.getOrderStatus())) {
			completeTask(task, orderRequest, orderEntity, Collections.singletonMap("orderReady", false));
			taskCompleted = true;
		}
		if (OrderStatus.ORDER_READY.equalsIgnoreCase(currentStatus)
				&& OrderStatus.ORDER_IN_DELIVERY.equalsIgnoreCase(orderRequest.getOrderStatus())) {
			completeTask(task, orderRequest, orderEntity, Collections.singletonMap("inDelivery", true));
			taskCompleted = true;
		} else if (OrderStatus.ORDER_READY.equalsIgnoreCase(currentStatus)
				&& OrderStatus.ORDER_IN_DELIVERY_REJECTED.equalsIgnoreCase(orderRequest.getOrderStatus())) {
			completeTask(task, orderRequest, orderEntity, Collections.singletonMap("inDelivery", false));
			taskCompleted = true;
		}
		if (OrderStatus.ORDER_IN_DELIVERY.equalsIgnoreCase(currentStatus)
				&& OrderStatus.ORDER_DELIVERED.equalsIgnoreCase(orderRequest.getOrderStatus())) {
			completeTask(task, orderRequest, orderEntity, Collections.singletonMap("delivered", true));
			taskCompleted = true;
		} else if (OrderStatus.ORDER_IN_DELIVERY.equalsIgnoreCase(currentStatus)
				&& OrderStatus.ORDER_NOT_DELIVERED.equalsIgnoreCase(orderRequest.getOrderStatus())) {
			completeTask(task, orderRequest, orderEntity, Collections.singletonMap("delivered", false));
			taskCompleted = true;
		}
		if (!taskCompleted) {
			throw new Exception("Invalid status chnage");
		}
		System.out.println("processing Task complated");

	}
	@Override
	public void updateOrderCurrentLocation(OrderStatusRequest orderRequest) throws Exception
	{
		OrderEntity orderEntity = (OrderEntity) orderRepository.findById(orderRequest.getOrderId());
		AddressLocationEntity currentAddressLocation=orderEntity.getCurrentAddressLocation();
		if(currentAddressLocation==null) {
			currentAddressLocation=new AddressLocationEntity();
		}
		currentAddressLocation.setGeolocation(orderRequest.getCurrentAddressLocation().getGeolocation());
		currentAddressLocation.setLatitude(orderRequest.getCurrentAddressLocation().getLatitude());
		currentAddressLocation.setLongitude(orderRequest.getCurrentAddressLocation().getLongitude());
		orderEntity.setCurrentAddressLocation(currentAddressLocation);
		orderRepository.save(orderEntity);

	}

	private void completeTask(Task task, OrderStatusRequest orderRequest, OrderEntity orderEntity, Map params) {
		orderEntity.setStatus(orderRequest.getOrderStatus());
		taskService.setVariable(task.getId(), "order", orderEntity);
		orderRepository.save(orderEntity);
		try {
		this.taskService.complete(task.getId(), params);
		}catch (Exception e) {
			e.printStackTrace();
		}

	}

	@Override
	public OrderEntity getOrder(Long orderId) {
		return orderRepository.findById(orderId);
	}

	@Override
	public List<OrderEntity> listOrders(String userid) {
		return orderRepository.findAll();
	}

}