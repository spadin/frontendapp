# Frontend App

An example of how to use Docker to drive a Webpack build. No need to locally
install node, npm, etc.

## Building the image

This project uses a `Dockerfile` and `Dockerfile.development` to avoid
re-installing all node modules every time you install just one node module.

### Build the Dockerfile

Will install all the node modules. You shouldn't need to build this one as
often. You could even have this be built by CI so you don't have to waste
development time waiting for this image to build.

```
$ docker build -t spadin/frontendapp .
```

### Build the Dockerfile.development

This builds on top of the `spadin/frontendapp` image so it should take a lot
less time to build.

```
$ docker-compose build frontend
```

## Running tests

Uses the ava test runner.

```
$ docker/frontend npm test -- --watch --verbose
```

## Build project

```
$ docker/frontend npm run webpack
```

## What's with all the `docker/frontend` commands?

Checkout the file at `docker/frontend`

```sh
#! /usr/bin/env sh

docker-compose run --rm frontend $@
```

All this does is run your command using `docker-compose` in the frontend
container and removes the container when it's done.
