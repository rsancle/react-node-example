FROM node:18-alpine
# Install the application's dependencies into the node_modules's cache directory.
WORKDIR /server
COPY server/package*.json ./
COPY server/tsconfig*.json ./
RUN npm install
COPY . .

ENTRYPOINT ["/bin/sh", "-c", "npm run build && npm run serve"]

