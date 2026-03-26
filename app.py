from flask import Flask
import os

app = Flask(__name__)

@app.route('/')
def hello():
    return "Hello! Your Python app is running on Azure F1 Tier."

if __name__ == "__main__":
    # Azure uses port 8000 by default for Linux apps
    port = int(os.environ.get("PORT", 8000))
    app.run(host='0.0.0.0', port=port)
