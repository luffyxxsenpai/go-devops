# Use busybox as the base image
FROM busybox:latest

# Copy HTML files to the container
COPY index.html /www/index.html

# Expose port 80 for HTTP
EXPOSE 80

# Start HTTP server to serve the HTML file
CMD ["httpd", "-f", "-p", "80", "-h", "/www"]

