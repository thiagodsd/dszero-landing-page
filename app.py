from flask import Flask, request
import utils
import serving

app = Flask(__name__)

@app.route('/welcome', methods=['GET'])
def index():
    return "Welcome to the Flask API!"


@app.route('/whatsapp', methods=['GET'])
def verify():
    """
    According to documentation, it needs to get hub.verify_token and hub.challenge
    """
    try:
        token = request.args.get('hub.verify_token')
        challenge = request.args.get('hub.challenge')
        if (token is not None) and (token == 'my_token') and (challenge is not None):
            return challenge
        else:
            return "Invalid Request or Verification Token", 400
    except Exception as e:
        return "An Error Occurred: " + str(e), 400


@app.route('/whatsapp', methods=['POST'])
def receive_message():
    try:
        data = request.get_json()
        entry = (data['entry'])[0]
        changes = (entry['changes'])[0]
        value = changes['value']
        message = (value['message'])[0]
        number = message['from']
        
        text = utils.get_text_user(message)
        reply_message(text, number)

        return "EVENT_RECEIVED"
    except Exception as e:
        _ = e
        return "EVENT_RECEIVED"


def reply_message(text, number):
    try:
        serving.send_message(text, number)
        return "Message sent successfully"
    except Exception as e:
        return "An Error Occurred: " + str(e)

if __name__ == '__main__':
    app.run()