# Dockerfile
FROM python:3.9

# Set the working directory
WORKDIR /app

# Copy the application files to the container
COPY . /app

# Install dependencies
RUN pip install Flask

# Expose port 7000
EXPOSE 7000

# Start the Flask app
CMD ["python3", "app.py"]
