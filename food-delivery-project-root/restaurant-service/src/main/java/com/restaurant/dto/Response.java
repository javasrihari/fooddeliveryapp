package com.restaurant.dto;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Response implements Serializable {
	public static String SUCCESS = "1";
	public static String FAILURE = "0";
	public String status;

	@JsonInclude(Include.NON_NULL)
	public Object data;

	@JsonInclude(Include.NON_NULL)
	public Serializable error;

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}

	public Serializable getError() {
		return error;
	}

	public void setError(Serializable error) {
		this.error = error;
	}

}
