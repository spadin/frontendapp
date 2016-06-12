[![Code Climate](https://codeclimate.com/github/spadin/frontendapp/badges/gpa.svg)](https://codeclimate.com/github/spadin/frontendapp)

# Frontend App

An example of how to use Docker to drive a Webpack build. No need to locally
install node, npm, etc.

## Requirements

[Docker Toolbox][2], [Docker Beta][1] or individually install [Docker Engine][3] and [Docker Compose][4].

## Docker Machine Setup

Skip this step if using Docker Beta on running on Linux.

```
$ docker-machine create --driver=virtualbox frontendapp
$ eval $(docker-machine env frontendapp)
```

Next time you restart, you'll need to start the machine and set up your environment.

```
$ docker-machine start frontendapp
$ eval $(docker-machine env frontendapp)
```

## Running specs

```
$ bin/spec
```

## Run specs and watch for changes

```
$ bin/spec --watch
```

## Build project

```
$ bin/build
```

## Build project and watch for changes

```
$ bin/build --watch
```

## Production builds

```
$ ENV=production bin/build
```

## More information

The point of this project is to make building a frontend project simple. The
specifics of the commands above are easily accessible, but not necessary to get
up and running. Simply running those commands will pull and build everything
you need to get up and running.

[1]: https://beta.docker.com/
[2]: https://www.docker.com/products/docker-toolbox
[3]: https://www.docker.com/products/docker-engine
[4]: https://www.docker.com/products/docker-compose
