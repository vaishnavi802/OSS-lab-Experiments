# Dockerfile

# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
# For this example, we don't have any external dependencies, so it's not required

# Make port 80 available to the world outside this container
# EXPOSE 80  # Uncomment if your application listens on a specific port

# Define environment variable
# ENV NAME World

# Run app.py when the container launches
CMD ["python", "arithmetic28.py"]
