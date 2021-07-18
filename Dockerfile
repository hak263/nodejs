FROM node:9
# FROM ubuntu
# RUN apt-get update
# RUN apt-get install nodejs -y 
# #RUN rm -f package-lock.json
# RUN apt-get install npm -y
# RUN apt-get install apt-utils -y


WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 4200

# CMD ["node", "app.js"]
CMD ["npm", "start"]