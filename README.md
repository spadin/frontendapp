[![Code Climate](https://codeclimate.com/github/spadin/frontendapp/badges/gpa.svg)](https://codeclimate.com/github/spadin/frontendapp)
[![Code Coverage](https://codeclimate.com/github/spadin/frontendapp/badges/coverage.svg)](https://codeclimate.com/github/spadin/frontendapp)
[![CircleCI](https://circleci.com/gh/spadin/frontendapp/tree/master.svg?style=shield&circle-token=a3e71e5344d38da268fef3762da1149158a368c2)](https://circleci.com/gh/spadin/frontendapp/tree/master)

# Frontend App

An example of how to use Docker to drive a Webpack build. No need to locally
install node, npm, etc.

## Requirements

[Docker][1]

## Running tests

```
$ bin/test
```

## Run specs and watch for changes

```
$ bin/test --watch
```

## Running linter

Runs eslint across all JavaScript files in the project.

```
$ bin/lint
```

## Build project

```
$ bin/build
```

## Build project and watch for changes

```
$ bin/build --watch
```

## Run webpack-dev-server

```
$ bin/server
```

```
$ open https://localhost
```

## Production builds

```
$ ENV=production bin/build
```

## Open a bash shell on a container

```
$ bin/frontend bash
```

## Install new node module

The `node_modules` directory is a Docker volume so this command will persist the new module and modify `package.json` with the new module dependency.

```
$ bin/frontend npm install --save left-pad
```

## More information

The point of this project is to make building a frontend project simple. The
specifics of the commands above are easily accessible, but not necessary to get
up and running.

[1]: https://docker.com/getdocker
