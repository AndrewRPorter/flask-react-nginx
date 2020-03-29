from flask import Blueprint, Response, jsonify

api_bp = Blueprint("api", __name__, url_prefix="/api")


@api_bp.route("/test", methods=["GET"])
def index() -> Response:
    """Defines the main website view"""
    return jsonify("hello world")
