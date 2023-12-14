# Dockerfile
FROM python:3.9

# Set the working directory
WORKDIR /app

# Copy the application files to the container
COPY . /app

# Install dependencies
RUN pip install Django

# Expose port 8000
EXPOSE 8000

# Start the Django app
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]
