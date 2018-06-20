# fooddeliveryapp
Food delivery App ( Spring Boot)

food-delivery-project-root - Root Proect

	1) restaurant-service

		This is a Spring Boot microservice along with activiti BPM framework.

		for data base connection , need to chnage details in application.properties

		spring.datasource.url=jdbc:mysql://localhost:3306/foodappdb?autoReconnect=true
		spring.datasource.username=root
		spring.datasource.password=root


	2) food-delivery-app-ui

		This is a spring boot project, contains resources/static folder which contains compiled html/js file using angular 4
		during maven build files  will be copied from "src/angular-ui-development/dist" to resources/static  .

		before Runing this module as Spring Boot App, need to run ng build on src/angular-ui-development folder. 

		Note: resources/static already contains intial version of files build from src/angular-ui-development folder



