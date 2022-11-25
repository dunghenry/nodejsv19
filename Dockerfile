FROM node:19-alpine

WORKDIR /var/app

COPY . .

RUN npm install

EXPOSE 4000

CMD [ "node", "--watch", "src/index.js" ]