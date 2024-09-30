FROM node:20.17-alpine

ARG ${CLIENT_PORT}

ENV CLIENT_PORT=${CLIENT_PORT}

EXPOSE ${CLIENT_PORT}

WORKDIR /credit-calculator-client

VOLUME /credit-calculator-client

RUN npm install -g @angular/cli 

COPY package.json .
RUN npm install

COPY . .

RUN apk --no-cache add curl 

CMD ng serve --host 0.0.0.0 --port ${CLIENT_PORT}