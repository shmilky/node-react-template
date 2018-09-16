## Node React Template

A template for creating a nodejs express based server with a reactjs client along using other well maintained packages:
 - react-router
 - webpack (and complimentary relevant packages)
 - request
 - Expressjs
 - pug

## Table of Contents:
- [Getting started](#getting-started)
- [Source Structure](#source-structure)
- [Webpack base configuration](#webpack-base-configuration)
- [Run Scripts](#run-scripts)

## Getting started

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
        - clientConfig.js - general webpack configurations for compiling the client for using on the browser
        - webpack.dev.js - for development environment webpack configuration, mostly the usage of dev-server
        - webpack.prod.js - when you want to go to production
        - ssrConfig.js - general webpack configurations for compiling the client for SSR
        - webpack.ssr.js - will be used when ssr
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
client
```
npm start
```
server (to see node options go to the package file and see what exactly the npm command do)
```
npm start
```

Production
client
```
npm run compile
```
server (to see node options go to the package file and see what exactly the npm command do)
```
npm run start-prod
```
