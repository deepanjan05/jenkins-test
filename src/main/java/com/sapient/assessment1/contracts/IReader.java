package com.sapient.assessment1.contracts;

import java.io.IOException;
import java.util.Vector;

import com.sapient.assessment1.entity.Employee;

public interface IReader {
	public Vector<Employee> readAll() throws IOException;
}
