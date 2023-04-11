# Base image
FROM node:18

WORKDIR ./

COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy app files
COPY . ./


CMD [ "index.js" ]
