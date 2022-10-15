FROM node:16.14.2-alpine3.15
RUN mkdir mss-pedidos
COPY . ./mss-pedidos
WORKDIR /mss-pedidos/
RUN npm install
EXPOSE 8082
CMD ["npm", "start"]