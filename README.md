# create-choo-express-app
Sets up a clean Choo app with Express and Webpack

## Usage

```bash
  cd <my new Choo application directory>
  bash <path to create-choo-express-app>/setup.sh
```

## Dependencies

### This script
This script requires only NPM and NodeJS to be installed in advance

### Created Choo-application
This script installs the following dependencies for the Choo-application it creates

* choo
* express
* body-parser
* webpack
* webpack-cli
* ignore-styles

#### Webpack plugins
The following Webpack plugins are also installed

* webpack-asset-map
* mini-css-extract-plugin
* uglifyjs-webpack-plugin
* css-loader
* url-loader
* babel-loader
* @babel/core
* @babel/preset-env
