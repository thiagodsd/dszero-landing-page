from flask import Flask, request

app = Flask(__name__)

@app.route('/welcome', methods=['GET'])
def index():
    return "Welcome to the Flask API!"

@app.route('/whatsapp', methods=['GET'])
def verify():
    return "Verify Token"

@app.route('/whatsapp', methods=['POST'])
def receive_message():
    return "Message Received"

if __name__ == '__main__':
    app.run()