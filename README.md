flask-react-nginx
=================

flask-react-nginx guide using docker-compose

client
------

The client directory was created using `create-react-app`. There are two Dockerfiles used for the client. One is for local development, using the npm development serer. The other builds the app into static files which are then serves them to nginx.

server
------

The server is responsible for exposing an api endpoint for client consumption. In this example, the client consumes the `/api/test/` endpoint in the `index.js` file.

Development
-----------

`docker-compose -f conf/docker-dev.yml up`

I have made this easier by adding a dev script

`./scripts/dev.sh`

*Note that the react development server will compile and refresh on file changes*

Production
----------

`docker-compose -f conf/docker-prod.yml up`

I have made this easier by adding a production script

`./scripts/prod.sh`

Usage
-----

- expose new api endpoints in the server view
- read from endpoints in client