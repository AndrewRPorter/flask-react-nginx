FROM python:3.7-slim

ENV CONTAINER_HOME=/var/www
WORKDIR $CONTAINER_HOME

ADD requirements.txt .

# keep the parent server directory structure for relative imports
RUN mkdir server
ADD server $CONTAINER_HOME/server

RUN pip install --no-cache-dir -r requirements.txt