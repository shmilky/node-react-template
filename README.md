## Node React Template

A template for creating a nodejs express based server with a reactjs client with other main stream packages such as:
 - react-router
 - webpack
 - request
 - jade

## Table of Contents:
- [Installation](#installation)
- [Source Structure](#source-structure)
- [Webpack base configuration](#webpack-base-configuration)
- [Run Scripts](#run-scripts)

## Installation

First you should clone the repository
```
git clone https://github.com/shmilky/node-react-template.git
```

The project is separated to 2 sub-folders
- [client](https://github.com/shmilky/node-react-template/tree/master/client)
- [server](https://github.com/shmilky/node-react-template/tree/master/server)

Once the clone is finished you must npm install the both of them
```
cd client
npm install
cd ..
cd server
npm install
cd ..
```

## Source Structure
- client - where all the react client code exist, also where the client development environment files are
    - src
        - api - the place for all api calls
        - components - dumb components home
        - containers - when using redux this is where the connected components should live
        - resources - folder for utils, helpers etc.
        - styleMain - main style configurations
        - App.js - the main app file
        - index.js - where it all begins:)
        - routes - helper to dynamically configure your web app routes
    - webpack
        - webpack.general.js - general webpack configurations
        - webpack.dev.js - for development environment webpack configuration, mostly the usage of dev-server
        - webpack.prod.js - when you want to go to production
    - .babelrc
    - webpack.config.js
- server - where all the node server code exist

## Webpack base configuration
Development
```
TBD
```

Production
```
TBD
```

Inline style with sass
```
TBD
```

Code splitting with System.require
```
TBD
```

## Run Scripts

Development
```
npm start
```

Production
```
npm run compile
```"# iHike" 
