# create-choo-express-app
Sets up a clean Choo app with Express and Webpack

## Usage

```bash
  cd <my new Choo application directory>
  bash <path to create-choo-express-app>/setup.sh
```

## Dependencies

### This script
This script uses bash and requires that NPM and NodeJS are installed in advance

### Created Choo-application
This script installs the following dependencies for the Choo-application it creates

* Choo
* Express
* Body-parser
* webpack
* webpack-cli

#### Webpack plugins
The following Webpack plugins are also installed

* html-webpack-plugin
* mini-css-extract-plugin
* uglifyjs-webpack-plugin
* url-loader
* babel-loader
