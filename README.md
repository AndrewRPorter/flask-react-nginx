flask-react-nginx
=================

flask-react-nginx guide using docker-compose

client
------

The client directory was created using `create-react-app`. There are two Dockerfiles used for the client. One is for local development, using the npm development serer. The other builds the app into static files which are then server to nginx.

server
------

For this implementation, we want to run the flask application from the project root. This allows relative imports from the server directory, which is how I structure most of my flask applications.

TODO
----

- work on production setup
- move compose files to root of project