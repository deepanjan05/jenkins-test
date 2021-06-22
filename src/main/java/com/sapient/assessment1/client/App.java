package com.sapient.assessment1.client;

import java.io.*;
import java.util.Vector;

import com.sapient.assessment1.contracts.*;
import com.sapient.assessment1.entity.*;
import com.sapient.assessment1.exception.InvalidGenderException;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main ( String[] args ) throws FileNotFoundException, IOException, InvalidGenderException
    {
        System.out.println( "Hello World!" );
        IReader reader;
        try {
			reader = new EmployeeFileReader("C:\\temp\\emps.txt");
		} catch (FileNotFoundException e) {
			throw e;
		} catch (IOException e) {
			throw e;
		} 
        
        Vector<Employee> allEmployees = reader.readAll();
        
        System.err.println("------------------ All Employees -------------------");
        allEmployees.forEach((emp)->System.out.println(emp.toString()));
        
        BufferedReader inp = new BufferedReader (new InputStreamReader(System.in));
        
        System.err.println("Enter a gender to search on: ");
        String gender = inp.readLine();
        System.err.println("------------------ Employees with Gender: "+ gender +"-------------------");
        
        ICriteria genderFilter = new GenderCriteria(gender);
        Vector<Employee> genderFilteredVector = genderFilter.meetCriteria(allEmployees); 
        genderFilteredVector.forEach((emp)->System.out.println(emp.toString()));
    }
    
    public static String run( String location, String gender ) throws FileNotFoundException, IOException, InvalidGenderException
    {
        System.out.println( "Hello World!" );
        IReader reader;
        try {
			reader = new EmployeeFileReader("C:\\temp\\emps.txt");
		} catch (FileNotFoundException e) {
			throw e;
		} catch (IOException e) {
			throw e;
		} 
        
        Vector<Employee> allEmployees = reader.readAll();
        
        System.err.println("------------------ All Employees -------------------");
        allEmployees.forEach((emp)->System.out.println(emp.toString()));
        
        System.err.println("------------------ Employees with Gender: "+ gender +"-------------------");
        
        ICriteria genderFilter = new GenderCriteria(gender);
        Vector<Employee> genderFilteredVector = genderFilter.meetCriteria(allEmployees); 
        genderFilteredVector.forEach((emp)->System.out.println(emp.toString()));
        
        return Integer.toString(genderFilteredVector.size());
    }
}
