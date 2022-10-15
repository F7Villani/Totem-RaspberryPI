FROM node:16.14.2-alpine3.15
RUN mkdir mss-produtos
COPY . ./mss-produtos
WORKDIR /mss-produtos/
RUN npm install
EXPOSE 8081
CMD ["npm", "start"]