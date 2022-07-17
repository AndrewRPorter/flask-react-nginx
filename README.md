# flask-react-nginx

Basic setup connecting flask to a react node application.

## client

The client directory was created using `create-react-app`. There are two Dockerfiles used for the client. One is for local development, using the node development server. The other builds the app into static files which are then served to nginx.

## server

The server is responsible for exposing an api endpoint for client consumption.

## Development

`docker-compose -f conf/docker-dev.yml up`

I have made this easier by adding a dev script

`./scripts/dev.sh`

_Note that the react development server will compile and refresh on file changes_

## Production

`docker-compose -f conf/docker-prod.yml up`

I have made this easier by adding a production script

`./scripts/prod.sh`

## Usage

- expose new api endpoints in the server view
- read from endpoints in client
