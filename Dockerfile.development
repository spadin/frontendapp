FROM spadin/frontendapp

ENV APP_HOME /var/app
ENV NODE_ENV development
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

COPY package.json $APP_HOME/package.json
RUN npm install

COPY . $APP_HOME
