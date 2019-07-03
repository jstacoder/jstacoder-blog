FROM node-sass:latest

RUN mkdir /app

ADD ./package.json /app/

WORKDIR /app

RUN npm install -g yarn

RUN yarn global add gatsby

RUN yarn install

EXPOSE 8000

EXPOSE 8005

CMD yarn start
