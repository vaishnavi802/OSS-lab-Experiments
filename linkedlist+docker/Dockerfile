# Dockerfile for the linkedlist.c program

# Use an official gcc image as a parent image
FROM gcc:latest

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Compile the C program
RUN gcc -o linkedlist linkedList.c

# Run the compiled program when the container launches
CMD ["./linkedlist"]
