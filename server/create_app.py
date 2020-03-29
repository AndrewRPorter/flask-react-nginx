from flask import Flask, g, jsonify

from .views.api_view import api_bp

def page_not_found(e):
    """Custom error handling for 404"""
    return jsonify({"error": "page not found"})


def create_app(testing: bool = True):
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_object("server.config")

    app.register_blueprint(api_bp)
    app.register_error_handler(404, page_not_found)

    @app.before_request
    def before_request() -> None:
        g.testing = app.testing

    app.app_context().push()  # this is needed for application global context

    return app


application = create_app()
