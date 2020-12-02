 # Create image based on the official Node 14 image from the dockerhub
FROM node:14.15.1-alpine as build-step
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 3000
CMD [ "node","server.js" ]