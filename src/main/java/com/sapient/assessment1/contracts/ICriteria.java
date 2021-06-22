package com.sapient.assessment1.contracts;

import java.util.*;
import java.util.function.Predicate;

import com.sapient.assessment1.entity.Employee;

public interface ICriteria {
	public Vector<Employee> meetCriteria(List<Employee> empVec);
}
