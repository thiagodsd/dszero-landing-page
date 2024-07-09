import requests
import json
import os
from dotenv import load_dotenv

load_dotenv()

def send_message(text_user, number_user):
    try:
        token = os.getenv('META_API_TOKEN')
        api_url = "https://graph.facebook.com/v19.0/301453326394584/messages"
        data = {
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": str(number_user),
            "type": "text",
            "text": {
                "body": text_user,
            }
        }
        headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
        response = requests.post(api_url, headers=headers, data=json.dumps(data))
        if response.status_code == 200:
            return True
        else:
            return False
    except Exception as e:
        _ = e
        return False