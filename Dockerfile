FROM node:6.0.0

ENV APP_HOME /var/app
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

COPY webpack.config.js $APP_HOME/webpack.config.js
COPY package.json $APP_HOME/package.json
RUN npm install

COPY ./src $APP_HOME/src

ENV NODE_ENV production
CMD npm run webpack
