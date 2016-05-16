# Frontend App

An example of how to use Docker to drive a Webpack build. No need to locally
install node, npm, etc.

## Requirements

[Docker Toolbox][1], [Docker Beta][2] or individually install [Docker Engine][3] and [Docker Compose][4].

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
# bin/build --watch
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
