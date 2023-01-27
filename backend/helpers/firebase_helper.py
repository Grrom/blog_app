import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate(
    './events-app-34c6b-firebase-adminsdk-ct9gf-9e145312b4.json')

app = firebase_admin.initialize_app(cred)

db = firestore.client()

events_collection = "blogs"


def create_blog(title, content):
    doc_ref = db.collection(events_collection).document()
    doc_ref.set({
        u'title': title,
        u'content': content,
    })


def get_blogs():
    users_ref = db.collection(events_collection)
    docs = users_ref.stream()

    blogs = []

    for doc in docs:
        dict = doc.to_dict()
        dict["id"] = doc.id
        blogs.append(dict)

    return blogs


def delete_blog(id):
    return db.collection(events_collection).document(id).delete()


def update_blog(id, title, content):
    doc_ref = db.collection(events_collection).document(id)
    doc_ref.set({
        u'title': title,
        u'content': content,
    })
