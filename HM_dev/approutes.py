from flask import Flask, request, render_template, redirect, url_for, flash, make_response, jsonify
from user import User
from flask_cors import CORS
from datetime import date
import random
from flask_bcrypt import Bcrypt
from util import uinp_search

'''
LINUX USERS USE export FLASK_APP=approutes.py
WINDOWS USERS USE set FLASK_APP=approutes.py
'''

app = Flask(__name__)
CORS(app)
flypt = Bcrypt(app)

@app.route('/')
def home():
    return("cool")

@app.route('/newuser', methods=['POST', 'GET'])
def user_create():

    data = request.get_json()
    keylist = data.keys()
    i=0
    for _ in keylist:
        i+=1
    username = data.get("username")
    email = data.get("emailAdd")
    hsex = data.get("hsex")
    height = data.get("height")
    weight = data.get("weight")
    goal = data.get("goal")
    lentry = date.today()
    passcode = create_pass()
    print("USERNAME: "+username+", PASSCODE: "+passcode)
    #password = phasher(passcode)
    password = passcode

    if i<6:
        var=0
        retmsg = error_list(var)
    elif i>6:
        var=1
        retmsg = error_list(var)
    else:
        newuser = User(username, email, hsex, height, weight, goal, lentry, password)
        retsig = newuser.insert()
        if retsig==True:
            retmsg = {
                "username":username,
                "password":passcode
            }
        else:
            errno = 3
            retmsg = error_list(errno)

    return jsonify(retmsg)

    
    

'''
@app.route('/created', method=['POST'])
def create_success():
    return jsonify({"account":"successfully created"})
'''

@app.route('/login', methods=['POST'])
def login():
    print('made it to login')
    data = request.get_json()
    username = str(data.get('username'))
    passcode = str(data.get('passcode'))

    print("USERNAME: "+username+", PASSCODE: "+passcode)
    inserted = User.login(username, passcode)

    if inserted==True:
        jsondata = {
            'username':username
        }
    else:
        jsondata = {
            "Error": "Error on account lookup",
            "message":"could not locate username/password combination"
    }
    return(jsonify(jsondata))
    

@app.route('/u', methods=['POST'])
def user(username):
    pass

@app.route('/cal', methods=['POST'])
def calories(calories):
    data  = request.get_json()
    blob = uinp_search(data)
    retmsg = {
        'message': "FDA DB BROKEN"
    }
    return(jsonify(retmsg))

@app.route('/settings', methods=['POST', 'GET'])
def change_settings():
    return('under construction')

@app.route('/wsub', methods=['POST'])
def weight_sub():
    data = request.get_json()
    username = data.get('useris')
    weight = data.get('weight')
    lentry = date.today()
    wmsg = User.update_weight(username, weight, lentry)
    smsg = User.update_streak(username, lentry)
    retmsg = {
        'message':wmsg,
        'streak': smsg
    }
    return(jsonify(retmsg))

def create_pass():
    passcode = str(random.randint(1000, 9999))
    return passcode

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
    home()