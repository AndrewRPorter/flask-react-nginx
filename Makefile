all: clean test run

run-server:
	gunicorn --bind localhost:5000 --workers 1 "server.create_app:create_app(True)"

run-client:
	npm start --prefix client

test:
	pytest --disable-pytest-warnings server/tests

clean:
	rm -rf *.pyc
	rm -rf *__pycache__