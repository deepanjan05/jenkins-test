package com.sapient.assessment1;

import static org.junit.Assert.assertEquals;

import java.io.*;

import org.junit.Test;

import com.sapient.assessment1.client.App;
import com.sapient.assessment1.exception.InvalidGenderException;


// SampleTest s = new SampleTest() - junit 
public class SampleTest {

	@Test
	public void AllCorrectMale() throws FileNotFoundException, IOException, InvalidGenderException {
		String location = "C:\\temp\\emps.txt";
		String gender = "F";
		assertEquals("3", App.run(location, gender));
	}
	
	@Test
	public void AllCorrectFemale() throws FileNotFoundException, IOException, InvalidGenderException {
		String location = "C:\\temp\\emps.txt";
		String gender = "M";
		assertEquals("1", App.run(location, gender));
	}
	
	@Test(expected = InvalidGenderException.class)
	public void invalidGenderException() throws FileNotFoundException, IOException, InvalidGenderException {
		String location = "C:\\temp\\emps.txt";
		String gender = "G";
		assertEquals("3", App.run(location, gender));
	}
	
	@Test(expected = FileNotFoundException.class)
	public void fileNotFoundException() throws FileNotFoundException, IOException, InvalidGenderException {
		String location = "E:\\temp\\emps1.txt";
		String gender = "F";
		assertEquals("3", App.run(location, gender));
	}
}	
