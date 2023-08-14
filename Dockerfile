# Stage1: UI Build
FROM node:16-alpine AS client-build
WORKDIR /usr/src
COPY client/ ./client/
RUN cd client && npm install && npm run build

# Stage2: API Build
# Stage2: API Build
FROM node:16-alpine AS server-build
WORKDIR /usr/src
COPY server/ ./server/
ENV ENVIRONMENT=production  
RUN cd server && npm install && npm run build
RUN ls

# Stage3: Packagign the app
FROM node:16-alpine
WORKDIR /root/
COPY --from=client-build /usr/src/client/build ./client/build
COPY --from=server-build /usr/src/server/dist .
RUN ls

EXPOSE 80

CMD ["node", "server.bundle.js"]
