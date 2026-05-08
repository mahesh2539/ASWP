import azure.functions as func
import json

def main(req: func.HttpRequest) -> func.HttpResponse:

    permissions = {
        "exchange": True,
        "sharepoint": True,
        "teams": False,
        "viva": False
    }

    return func.HttpResponse(
        json.dumps(permissions),
        mimetype="application/json"
    )
