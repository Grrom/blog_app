from flask_cors import CORS
from flask import Flask
from flask import request

app = Flask("/")
app = Flask(__name__)
CORS(app)


@app.route('/')
def hello():
    return '<h1>Hello, World!</h1>'


app.run(host="0.0.0.0", port=8080)
