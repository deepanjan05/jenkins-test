package com.sapient.assessment1.exception;

public class InvalidGenderException extends Exception {
	private String msg;
	
	public InvalidGenderException() {
		this.msg = "Invalid gender entered. Gender should be either M or F";
	}

	@Override
	public String toString() {
		return "InvalidGenderException [msg=" + msg + "]";
	}
}
