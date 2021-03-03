import sqlite3
import random
import os
import hashlib
from datetime import date
from schema import schema

#create a separate way to track session_id
class User:
    dbpath = "hmedev.db"
    def __init__(self, username, email, height, weight, hsex, goal, lentry, password=0, streakcount=0, level=1, plateau=0):
        self.username = username
        self.email = email
        self.password = password
        self.hsex = hsex
        self.height = height
        self.weight = weight
        self.level = level
        self.plateau = plateau
        self.goal = goal
        self.streakcount = streakcount
        self.lentry = lentry

    #add new users to db
    def insert(self):

        passcode = self.create_pass()
        print(passcode)
        self.password = self.passhash(passcode)

        with sqlite3.connect(self.dbpath) as conn:
            cursor = conn.cursor()
            sql = f"""
            INSERT INTO users (
                username, email, password, height, weight, hsex, goal, lentry, streakcount, level, plateau
            ) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"""
            values = (self.username, self.email, self.password, self.height, self.weight, self.hsex, self.goal, self.lentry, self.streakcount, self.level, self.plateau)
            cursor.execute(sql, values)
            upc = {"username":self.username, "password":passcode}
            return (upc)
            
    @classmethod
    def update_user(self, username, column, uservalue, lentry):
        self.username = username
        #take in keyword args or dict and insert into strvar
        with sqlite3.connect(self.dbpath) as conn:
            cursor = conn.cursor()
            sql = f"""
            UPDATE users
            SELECT * WHERE {self.username}
            SET {column} = {uservalue},
            SET lentry = {lentry}
            """
            cursor.execute(sql)
            return ('Updated')
    
    def update_calories(self, username, column, value):
        with sqlite3.connect(self.dbpath) as conn:
            cursor = conn.cursor()
            sql = f"""
            UPDATE tablename
            SELECT * WHERE {self.username}
            SET {column} = {value}
            """
            cursor.execute(sql)
            return('DB updated')

    @classmethod
    def login(self, username, password):
        opassword = password
        password = self.passhash(opassword)
        print(password)
        if username and password:
            with sqlite3.connect(self.dbpath) as conn:
                cursor = conn.cursor()
                sql = f"""
                SELECT * WHERE {username} and {password}
                """
                cursor.execute(sql)
                
                jsondata = {"username":username, "islogged":True}
        else:
            jsondata = {"Error":"ERROR:", "message":"Username or password incorrect."}

            return (jsondata)

    #create Levels and return current level
    def new_level(self, level, plateau, goal):
        pass

    def authentication(self, session_id):
        with sqlite3.connect(self.dbpath) as conn:
            cursor = conn.cursor()
            sql = """SELECT * FROM users WHERE session_id=?"""
            cursor.execute(sql, (session_id))
            return

    @staticmethod
    def create_pass():
        #make string?
        passcode = str(random.randint(10000000000000, 99999999999999))
        return passcode
    
    @staticmethod
    def passhash(password):
        phash = hashlib.sha256()
        phash.update(password.encode())
        return phash.hexdigest()
    
    @staticmethod
    def create_session_id():
        shash = hashlib.sha256()
        rando = ""
        for _ in range(16):
            rando.join(str(random.randint(0,9)))
        shash.update(rando.encode())
        return shash.hexdigest()[:15]

    def reset_lvl(self):
        username = 'booty'
        level = 1
        column = "level"
        lentry = date.today()
        self.update_user(username, column, level, lentry)
        return