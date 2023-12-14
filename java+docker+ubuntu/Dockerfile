# Use the official Ubuntu base image
FROM ubuntu:latest

# Set environment variables
ENV DEBIAN_FRONTEND=noninteractive

# Update the package list and install OpenJDK
RUN apt-get update && \
    apt-get install -y openjdk-8-jdk

# Create a directory for the Java application
WORKDIR /usr/src/app

# Create a simple Java application (HelloWorld.java)
RUN echo 'public class HelloWorld { public static void main(String[] args) { System.out.println("Hello, Docker!"); } }' > HelloWorld.java

# Compile the Java application
RUN javac HelloWorld.java

# Set the entry point to run the Java application
CMD ["java", "HelloWorld"]
