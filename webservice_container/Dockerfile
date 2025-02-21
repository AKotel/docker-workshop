# Basis-Image mit Nginx
FROM nginx:latest

# Arbeitsverzeichnis setzen
WORKDIR /usr/share/nginx/html

# Alte Standard-Nginx-Dateien löschen
RUN rm -rf ./*

# HTML- und CSS-Dateien kopieren
COPY index.html .
COPY style.css .

# Exponiere Port 80 für den Webserver
EXPOSE 80

# Nginx starten
CMD ["nginx", "-g", "daemon off;"]
