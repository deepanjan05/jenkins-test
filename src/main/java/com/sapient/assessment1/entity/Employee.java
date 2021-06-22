package com.sapient.assessment1.entity;

public class Employee {
	String empname;
	double salary;
	String email;
	String location;
	String gender;
	
	public Employee(String empname, double salary, String email, String location, String gender) {
		super();
		this.empname = empname;
		this.salary = salary;
		this.email = email;
		this.location = location;
		this.gender = gender;
	}

	public String getGender() {
		return gender;
	}
	
	@Override
	public boolean equals(Object o) {
		if (o == this) return true;
		if (!(o instanceof Employee)) return false;
		
		return this.empname==((Employee)o).empname;
	}
	
	@Override
	public String toString() {
		return "(" + empname + ", " + Double.toString(salary) + ", " + email + ", " + location + ", " + gender + ")";	
	}
}
