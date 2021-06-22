FROM openjdk 

COPY target/assessment1-0.0.1-SNAPSHOT.jar /deployments/

CMD java -cp /deployments/assessment1-0.0.1-SNAPSHOT.jar com.sapient.assessment1.client.App
