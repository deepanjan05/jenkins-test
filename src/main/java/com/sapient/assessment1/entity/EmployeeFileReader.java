package com.sapient.assessment1.entity;

import java.io.*;
import java.util.*;

import com.sapient.assessment1.contracts.IReader;

public class EmployeeFileReader implements IReader {
	BufferedReader br;

	public EmployeeFileReader(String location) throws FileNotFoundException, IOException {
		super();
		try {
			br = new BufferedReader(new FileReader(location));
			br.mark(0);
		} catch (FileNotFoundException e) {
			throw e;
		} catch (IOException e) {
			throw e;
		}
	}

	@Override
	public Vector<Employee> readAll() throws IOException {
		// TODO Auto-generated method stub
		Vector<Employee> v = new Vector<Employee>();
		Set<Employee> names = new HashSet<Employee>();
		String line;
		br.reset();
		br.readLine();
		while ((line = br.readLine()) != null) {
			Employee emp = parse(line);
			if (emp!=null && !names.contains(emp)) {
				v.add(parse(line));
			}
		}
		return v;
	}
	
	public Employee parse(String line) {
		Employee emp;
		String[] data = line.split("\\|");
		Arrays.parallelSetAll(data, (i) -> data[i].trim());
		//System.out.println(Arrays.toString(data));
		try {
			emp = new Employee(data[1], Double.parseDouble(data[2]), data[3], data[4], data[5]);
		} catch (ArrayIndexOutOfBoundsException e) {
			return null;
		} 
		return emp;
	}

}
