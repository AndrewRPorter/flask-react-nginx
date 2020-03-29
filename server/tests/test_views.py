import pytest

from server.create_app import create_app


@pytest.fixture
def client():
    application = create_app()
    client = application.test_client()
    yield client


def test_routes(client):
    response = client.get("/api/test")
    assert response.status_code == 200
