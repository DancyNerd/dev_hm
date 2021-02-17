import sqlite3
import random
import os
import hashlib
from datetime import date
from schema import schema

#create a separate way to track session_id
class User:
    dbpath = "hmedev.db"
    def __init__(self, username, email, height, weight, hsex, goal, password=0, streakcount=0, level=1, plateau=0):
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

    #add new users to db
    def insert(self):

        passcode = self.create_pass()
        self.password = self.passhash(passcode)

        nweight = self.append_weight(self.weight)
        self.weight = nweight

        with sqlite3.connect(self.dbpath) as conn:
            cursor = conn.cursor()
            sql = f"""
            INSERT INTO users (
                username, email, password, height, weight, level, plateau, goal, streakcount, level, plateau
            ) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)"""
            values = (self.username, self.email, self.password, self.height, self.weight, self.level, self.plateau, self.goal, self.streakcount)
            cursor.execute(sql, values)
            upc = {self.username:passcode}
            return (upc)

    def update_user(self, column, uservalue):
        #take in keyword args or dict and insert into strvar
        with sqlite3.connect(self.dbpath) as conn:
            cursor = conn.cursor()
            sql = f"""
            UPDATE users
            SELECT * WHERE {self.username}
            SET {column} = {uservalue}
            """
            cursor.execute(sql)
            return
    
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
        if username and password:
            with sqlite3.connect(self.dbpath) as conn:
                cursor = conn.cursor()
                sql = f"""
                SELECT * WHERE {username} and {password}
                """
                cursor.execute(sql)
                
                jsondata = {"Cookie ID":username}
        else:
            jsondata = {"Error":"sorry no"}

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

    def append_weight(self, weight):
        curdt = date.today()
        strweight = str(weight)
        dicweight = {strweight:curdt}
        return dicweight

    def reset_lvl(self):
        level = 1
        column = "level"
        self.update_user(column, level)
        return