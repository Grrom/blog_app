from flask_cors import CORS
from flask import Flask
from flask import request

import helpers.firebase_helper as firebase_helper

app = Flask("/")
app = Flask(__name__)
CORS(app)


@app.route("/create_blog", methods=["POST"])
def create_blog():
    args = request.form
    firebase_helper.create_blog(
        args.get("title"), args.get("content"))
    return "blog added"


@app.route("/list_blogs")
def list_blog():
    return firebase_helper.get_blogs()


@app.route("/update_blog", methods=["POST"])
def update_blog():
    args = request.form
    firebase_helper.update_blog(
        args.get("id"), args.get("title"), args.get("content"))
    return "blog updated"


@app.route("/delete_blog", methods=["POST"])
def delete_blog():
    args = request.form
    firebase_helper.delete_blog(args.get("id"))
    return "blog deleted"


app.run(host="0.0.0.0", port=8080)
