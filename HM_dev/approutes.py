from flask import Flask, request
from user import User
from flask_cors import CORS

'''
LINUX USERS USE export FLASK_APP=approutes.py
WINDOWS USERS USE set FLASK_APP=approutes.py
'''

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return("I don't really exist yet, sorry.")

@app.route('/newuser', methods=['GET','POST'])
def user_create():
    data = request.get_json()
    keylist = data.keys()
    i=0
    for _ in keylist:
        i+=1
    username=data.get("username")
    email = data.get("emailAdd")
    hsex = data.get("hsex")
    height = data.get("height")
    weight = data.get("weight")
    goal = data.get("goal")
    if i<5:
        var=0
        retmsg = error_list(var)
    elif i>5:
        var=1
        retmsg = error_list(var)
    else:
        newuser = User(username, email, hsex, height, weight, goal)
        retmsg = newuser.insert()

    return request.jsonify(retmsg)

'''
@app.route('/created', method=['POST'])
def create_success():
    return jsonify({"account":"successfully created"})
'''

@app.route('/login', methods=['POST'])
def login():
    pass

@app.route('/u/<username>', methods=['POST'])
def user(username):
    pass

'''
@app.route('/settings', method=['POST'])
def change_settings():
    pass
'''

def error_list(errno):
    if errno==0:
        msg = {"Error":"You must fill in every field."}
    elif errno==1:
        msg = {"Error":"You somehow magically filled in too many fields. Try again."}
    elif errno==2:
        msg = {"Error":"Server error"}
    elif errno==3:
        msg = {"Error":"DB error"}
    else:
        msg = {"Error":"OH NO BABY WHAT IS YOU DOING"}
    return msg

if __name__=="__main__":
    user_create()