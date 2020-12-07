#  # Create image based on the official Node 14 image from the dockerhub
# FROM node:14.15.1-alpine as build-step
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app
# COPY package.json /usr/src/app
# RUN npm install
# COPY . /usr/src/app
# EXPOSE 4200
# CMD ["npm", "start"]
FROM node:14.15.1-alpine as build-step
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:latest
COPY --from=builder /usr/src/app/dist/client/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80 443
