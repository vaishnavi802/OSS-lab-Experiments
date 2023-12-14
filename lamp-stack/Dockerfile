# Use an official PHP image with Apache as a base
FROM php:apache

# Install MySQLi extension
RUN docker-php-ext-install mysqli

# Copy PHP files into the document root
COPY index.php /var/www/html/
COPY db.php /var/www/html/
COPY register.php /var/www/html/

# Expose port 80 for incoming HTTP traffic
EXPOSE 80
