 # Create image based on the official Node 14 image from the dockerhub
FROM node:14.15.1-alpine as build-step
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install
COPY . /usr/src/app
EXPOSE 4200
CMD ["npm", "start"]
