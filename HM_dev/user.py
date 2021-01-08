import sqlite3
import random
import os
import hashlib

#create a separate way to track session_id
class User:
    dbpath = "temp until perm"
    def __init__(self, username, email, password, height, weight, goal, lupdate, level=1, plateau=0):
        self.username = username
        self.email = email
        self.password = password
        self.height = height
        self.weight = weight
        self.level = level
        self.plateau = plateau
        self.goal = goal
        self.lupdate = lupdate

    #add new users to db
    def insert(self, cls):
        with sqlite3.connect(cls.dbpath) as conn:
            cursor = conn.cursor()
            sql = f"""
            INSERT INTO {self.tablename} (
                username, email, password, height, weight, level, plateau, goal
            ) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)"""
            values = (self.username, self.email, self.password, self.height, self.weight, self.level, self.plateau, self.goal, self.timezon)
            cursor.execute(sql, values)

    def update(self, cls, column, uservalue, tablename="users"):
        #take in keyword args or dict and insert into strvar
        with sqlite3.connect(cls.dbpath) as conn:
            cursor = conn.cursor()
            sql = f"""
            UPDATE {self.tablename}
            SET {self.column} = {uservalue}
            """
            return

    @classmethod
    def login(self, cls, username, password):
        with sqlite3.connect(cls.dbpath) as conn:
            cursor = conn.cursor()
            sql = f"""
            SELECT * WHERE {self.username}
            """
        pass

    @classmethod
    def authentication(cls, session_id):
        with sqlite3.connect(cls.dbpath) as conn:
            cursor = conn.cursor()
            sql = """SELECT * FROM users WHERE session_id=?"""
            cursor.execute(sql, (session_id))
            return

    @staticmethod
    def create_pass():
        passcode = random.randint(10000000000000, 999999999999999)
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