FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
#COPY package*.json ./

RUN npm install twitter
RUN npm install mysql
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY connect_mysql.js /usr/src/app/

EXPOSE 8080
CMD [ "node", "connect_mysql.js"] 
