FROM node:18-alpine
# Install the application's dependencies into the node_modules's cache directory.
WORKDIR /client
COPY client/package*.json ./
RUN npm install --production
COPY . ./
RUN npm run build
RUN npm install -g serve


ENTRYPOINT [ "serve -s build" ]
