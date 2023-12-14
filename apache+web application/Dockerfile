# Use an official PHP image with Apache as a base
FROM php:apache

# Copy the HTML and PHP files into the document root
COPY index.html /var/www/html/
COPY login.php /var/www/html/

# Expose port 80 for incoming HTTP traffic
EXPOSE 80