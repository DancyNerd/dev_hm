import sqlite3
import random
import os
import hashlib
from datetime import date
from schema import schema
from dtfuncs import streaks

#create a separate way to track session_id
class User:
    dbpath = "hmedev.db"
    def __init__(self, username, email, height, weight, hsex, goal, lentry, password, streakcount=0, level=1, plateau=0):
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

        with sqlite3.connect(self.dbpath) as conn:
            cursor = conn.cursor()
            sql = f"""
            INSERT INTO users (
                username, email, password, height, weight, hsex, goal, lentry, streakcount, level, plateau
            ) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"""
            values = (self.username, self.email, self.password, self.height, self.weight, self.hsex, self.goal, self.lentry, self.streakcount, self.level, self.plateau)
            cursor.execute(sql, values)
        upc = True
        return (upc)
            
    #Update the user's weight
    @classmethod
    def update_weight(self, username, weight, lentry):
        self.username = username
        #take in keyword args or dict and insert into strvar
        with sqlite3.connect(self.dbpath) as conn:
            cursor = conn.cursor()
            sql = f"""
            UPDATE users 
            SET (weight, lentry)
            WHERE username = (username)
             VALUES(?, ?, ?)
            """
            values = (weight, lentry, username)
            cursor.execute((sql), (values))
        return ('Weight Updated')

    #Automatically update the user's streak
    @classmethod
    def update_streak(self, username, lentry):
        self.username = username
        with sqlite3.connect(self.dbpath) as conn:
            cursor = conn.cursor()
            sql = f"""
            SELECT streakcount, lentry FROM users
            WHERE username = (username)
            """
            cursor.execute((sql), (username))
        for row in cursor.fetchall():
            streak = int(row[0])
            lentry = row[1]
        nstreak = streaks(lentry, streak, username)

        #For testing and development
        print("STREAK")
        print(streak)
        print("-----------------------")
        print("NSTREAK")
        print(nstreak)
        if nstreak != streak:
            with sqlite3.connect(self.dbpath) as conn:
                cursor = conn.cursor()
                sql = f"""
                UPDATE users
                SET (streak)
                WHERE username=(username), VALUES(?, ?)
                """
                values = (nstreak, username)
                cursor.execute((sql), (values))
            streak=nstreak
        return streak
    
    #Update the user's calories 
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

    #Validate the user's username and password against the db for login
    @classmethod
    def login(self, username, password):
        username = username
        password = password
        if username and password:
            inserted = True
            with sqlite3.connect(self.dbpath) as conn:
                cursor = conn.cursor()
                sql = f"""
                SELECT * FROM users WHERE username=? and password=?
                """
                cursor.execute((sql),(username, password))  
        else:
            inserted = False

        return (inserted)

    #Update level
    def new_level(self, level, plateau, goal):
        pass

    #Checking Session ID, for use with cookie handling
    def authentication(self, session_id):
        with sqlite3.connect(self.dbpath) as conn:
            cursor = conn.cursor()
            sql = """SELECT * FROM users WHERE session_id=?"""
            cursor.execute(sql, (session_id))
            return
    
    #Create hash of passcode
    @staticmethod
    def passhash(password):
        phash = hashlib.sha256()
        phash.update(password.encode())
        return phash.hexdigest()
    
    #Create Session ID for cookie handling
    @staticmethod
    def create_session_id():
        shash = hashlib.sha256()
        rando = ""
        for _ in range(16):
            rando.join(str(random.randint(0,9)))
        shash.update(rando.encode())
        return shash.hexdigest()[:15]

    '''def reset_lvl(self):
        username = 'booty'
        level = 1
        column = "level"
        lentry = date.today()
        self.update_user(username, column, level, lentry)
        return'''