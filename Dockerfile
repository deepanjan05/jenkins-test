FROM openjdk 

COPY target/assessment1-0.0.1-SNAPSHOT.jar /deployments/

COPY C:\temp\epms.txt /deployments/emps.txt

CMD java -cp /deployments/assessment1-0.0.1-SNAPSHOT.jar com.sapient.assessment1.client.App
