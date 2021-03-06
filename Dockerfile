FROM mhart/alpine-node:6.2.1

RUN apk update
RUN apk add git

ENV APP_HOME /var/app
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

COPY package.json $APP_HOME/package.json
RUN npm install

COPY . $APP_HOME
