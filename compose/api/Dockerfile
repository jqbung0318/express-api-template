###################
# BUILD FOR LOCAL DEVELOPMENT
###################

# Base image
FROM node:20-alpine AS DEVELOPMENT

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY --chown=node:node package*.json ./

# Install app dependencies
RUN npm ci --no-audit --no-progress && chown -R node ./node_modules

# Bundle app source
COPY --chown=node:node . .

USER node

CMD [ "npm", "run", "dev" ]

###################
# BUILD FOR PRODUCTION
###################

# Base image
FROM node:20-alpine AS BUILD

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY --chown=node:node package*.json ./

# Install app dependencies
RUN npm ci --no-audit --no-progress && chown -R node ./node_modules

# Bundle app source
COPY --chown=node:node . .

RUN npm run build


###################
# SERVE PRODUCTION
###################

FROM node:20-alpine AS PRODUCTION

WORKDIR /usr/src/app

COPY --chown=node:node --from=BUILD /usr/src/app/package*.json ./
COPY --chown=node:node --from=BUILD /usr/src/app/node_modules ./node_modules/
COPY --chown=node:node --from=BUILD /usr/src/app/dist ./dist/

EXPOSE 3001

USER node

CMD ["npm", "start"]