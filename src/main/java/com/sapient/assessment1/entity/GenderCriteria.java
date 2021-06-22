package com.sapient.assessment1.entity;

import java.util.*;
import java.util.function.Predicate;
import java.util.stream.Collectors;

import com.sapient.assessment1.contracts.ICriteria;
import com.sapient.assessment1.exception.InvalidGenderException;

public class GenderCriteria implements ICriteria {
	Predicate<Employee> p;
	
	public GenderCriteria(String gender) throws InvalidGenderException {
		if (gender.equalsIgnoreCase("m")) {
			p = e -> e.getGender().equals("male");
		} else if(gender.equalsIgnoreCase("f"))  {
			p = e -> e.getGender().equals("female");
		} else {
			throw new InvalidGenderException();
		}
	} 
	
	@Override
	public Vector<Employee> meetCriteria(List<Employee> empVec) {
		return new Vector<Employee>(empVec.stream().filter(p).collect(Collectors.toList())); 
	}

}
