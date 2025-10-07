# Make Node.js Web Application Docker
# https://nodejs.org/ja/docs/guides/nodejs-docker-webapp/
FROM node:12

# Create an application directory.
WORKDIR /usr/src

# Bundle application sources.
COPY ./src/ /usr/src
RUN rm -rf node_modules dist

# Node.js オプション設定 (memory up)
ENV NODE_OPTIONS "--max-old-space-size=4096"

# Install application dependencies.
#RUN npm install -g n
RUN npm install

# build in test mode and create a dist folder.
RUN npm run build

EXPOSE 8080
