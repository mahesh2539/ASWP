import azure.functions as func
import json

def main(req: func.HttpRequest) -> func.HttpResponse:

    body = req.get_json()

    message = body.get("message")

    response = {
        "response": f"Received message: {message}"
    }

    return func.HttpResponse(
        json.dumps(response),
        mimetype="application/json"
    )
