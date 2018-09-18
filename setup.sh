#!/bin/bash

# Init a simple NodeJS project,
# using Express, Choo, Webpack and body-parser

DATE=`date '+%Y-%m-%d_%H%M%S'`
DIR="node_generated_$DATE"

# Find this script's directory
SCRIPT_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

# Print a string in green
function printg {
	printf "\033[1;32m$1\033[0m\n"
}

printg "• copying files"

# Copy the template-files to a new folder
# in the current working-directory
cp -r "$SCRIPT_DIR/template" "./$DIR_$DATE"

# cd into the new folder for all
# following commands
cd "./$DIR_$DATE"

printg "• setting up NPM"
npm init

printg "• installing dependencies"
npm install express choo body-parser dotenv --save

printg "• installing dev-dependencies"
npm install webpack webpack-cli --save-dev

printg "• installing webpack plugins"
npm install html-webpack-plugin mini-css-extract-plugin uglifyjs-webpack-plugin url-loader babel-loader --save-dev

printg "Done"
