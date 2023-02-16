# Set the base image to node:12-alpine
FROM node:18-alpine as build

# Specify where our app will live in the container
WORKDIR /app

# Copy the React App to the container
COPY . /app/

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install

# Prepare nginx
FROM nginx:1.16.0-alpine
COPY --from=build /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

# Fire up nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
