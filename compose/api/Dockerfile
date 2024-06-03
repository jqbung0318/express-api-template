###################
# BUILD FOR LOCAL DEVELOPMENT
###################

# Base image
FROM node:lts AS DEVELOPMENT

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY --chown=node:node package*.json ./

# Install app dependencies
RUN npm ci --no-audit --no-progress && chown -R node ./node_modules

# Bundle app source
COPY --chown=node:node . .

USER node