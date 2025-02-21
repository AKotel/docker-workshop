from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

@app.route("/")
def home():
    return "Hello from Flask Backend!"

@app.route("/api/value")
def get_value():
    return jsonify({"message": "Hallo von der API!"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
