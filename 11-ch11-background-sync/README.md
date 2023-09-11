This is just one of the 87 recipes that can be found in O'Reilly Media's React Cookbook

[![The React Cookbook](https://github.com/dogriffiths/ReactCookbook-source/raw/master/cover.jpg)](https://www.amazon.com/React-Cookbook-Recipes-Mastering-Framework/dp/1492085847/)

## To run this:

In one terminal/command-prompt, install the libraries:

    yarn install

Then start the server:

    node server.js

This example uses a service-worker, so you cannot simply run a development build. Instead, you need to create a production build, and run a server for it.

In a second terminal, create a production build:

    yarn run build

Then start a server for the client:

    yarn run serve
