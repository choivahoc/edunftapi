FROM node:17

ARG app_name=edunft

# Create app directory
WORKDIR /usr/src/${app_name}

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

#RUN npm install
# If you are building your code for production
RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8050
CMD [ "node", "src/index.js" ]