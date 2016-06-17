FROM nginx:1.11-alpine

RUN apk update
RUN apk add openssl
RUN mkdir -p /etc/nginx/ssl
RUN openssl req \
      -x509 \
      -nodes \
      -days 365 \
      -newkey rsa:2048 \
      -subj "/C=US/ST=Denial/L=Springfield/O=Dis/CN=localhost" \
      -keyout /etc/nginx/ssl/server.key \
      -out /etc/nginx/ssl/server.crt

COPY default.conf /etc/nginx/conf.d/default.conf
