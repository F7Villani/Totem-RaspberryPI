FROM node:16.14.2-alpine3.15
RUN mkdir barramento
COPY . ./barramento
WORKDIR /barramento/
RUN npm install
EXPOSE 8080
CMD ["npm", "start"]