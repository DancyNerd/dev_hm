#DB segment, import db
import sqlite3

'''
List o table things
user
    email address
    username
    height
    weight
    hormonal sex
    time zone
    loss/gain
    goal
    level ref
    plateau valley
    session_id
levels
    L1
    L2
    L3
    L4
    L5
    L6
    L7
    L8/GOAL
    Plateau
    userref
caloric understanding
    maybe future things
'''

def schema(dbpath="hmedev.db"):
    with sqlite3.connect(dbpath) as conn:
        cursor=conn.cursor()
    cursor.execute("""
    CREATE TABLE users ()
    pk INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(16) UNIQUE NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    password VARCHAR NOT NULL,
    session_id VARCHAR(16),
    height REAL(6),
    weight REAL(6)
    )""")

    cursor.execute("""
    CREATE TABLE levels (
    pk INTEGER PRIMARY KEY AUTOINCREMENT,
    user_pk INTEGER UNIQUE,
    L1 INTEGER,
    L2 INTEGER,
    L3 INTEGER,
    L4 INTEGER,
    L5 INTEGER,
    L6 INTEGER,
    L7 INTEGER,
    L8Goal INTEGER,
    plateau INTEGER,
    FOREIGN_KEY (user_pk) REFERENCES users (pk)
    )
    """)








if __name__=="__main__":
    schema()