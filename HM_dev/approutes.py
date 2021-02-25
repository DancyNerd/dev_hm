from flask import Flask, request, render_template, redirect, url_for, flash, make_response
from user import User
from flask_cors import CORS
from datetime import date
import random

'''
LINUX USERS USE export FLASK_APP=approutes.py
WINDOWS USERS USE set FLASK_APP=approutes.py
'''

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    if get_cookie():
        return('something')
    else:
        return('nothing')

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
    oweight = data.get("weight")
    goal = data.get("goal")
    weight = weight_const(oweight)
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
    data = request.get_json()
    username = str(data.keys())
    passcode = str(data.values())
    jsondata = User.login(username, passcode)
    resp = make_response(render_template(...))
    cookie_name = easybake(username)
    cookie_val = chocolatechip(username)
    resp.set_cookie(cookie_name, cookie_val, max_age=7200)
    return (jsondata, resp)

@app.route('/getcookie', methods=['POST'])
def get_cookie():
    cookiename = 'hi'
    cookies = request.cookies.get(cookiename)
    if cookies:
        return True
    else:
        return False
    

@app.route('/u', methods=['POST'])
def user(username):
    pass

@app.route('/cal', methods=['POST'])
def calories(calories):
    return("API CALLS GO HERE")

@app.route('/settings', methods=['POST', 'GET'])
def change_settings():
    return('under construction')

@app.route('/wsub', methods=['POST'])
def weight_sub():
    username='booty'
    column = 'weight'
    data = request.get_json()
    oweight = data.values()
    weight = weight_const(oweight)
    User.update_user(username, column, weight)
    return('Submitted')


def easybake(username):
    cookdate = str(date.today())
    cookiename = "hi"+username+cookdate
    return(cookiename)

def chocolatechip(username):
    session_id = str(random.randint(100, 999))
    cookie_val = ''+username+':'+session_id
    return(cookie_val)

def weight_const(oweight):
    cur_date = date.today()
    nweight = {
        oweight:cur_date
    }
    return nweight


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