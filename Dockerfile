FROM  node:latest

MAINTAINER  Flavio Augusto Faleiros

ENV PORT=3000 

COPY . /var/www

WORKDIR  /var/www 

RUN npm install

EXPOSE $PORT 
