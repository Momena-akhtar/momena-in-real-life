#Build the file
FROM node:18 AS builder

#Set the working directory
WORKDIR /app

#Copy the .json files
COPY package*.json ./

#Install the dependencies
RUN npm install

#Copy rest of the files 
COPY . .

#Build the app
RUN npm run build

#Serve the app with nginx
FROM nginx:stable-alpine AS production

#Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

#copy built files from previous stage
COPY --from=builder /app/dist /usr/share/nginx/html

#copy custom nginx config
#COPY nginx.conf /etc/nginx/conf.d/default.conf

#Expose port 80
EXPOSE 80

#start nginx server
CMD [ "nginx", "-g", "daemon off;" ]