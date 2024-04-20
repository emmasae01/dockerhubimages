FROM node:16-alpine


WORKDIR /usr/src/app


COPY package*.json ./
RUN npm install

RUN npm install nodemon -g
RUN npm install express
RUN npm install mongoose



COPY . .

VOLUME /data_store
EXPOSE 5000


EXPOSE 3000

CMD ["npm", "start"]