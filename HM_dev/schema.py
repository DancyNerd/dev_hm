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
        CREATE TABLE users (
        pk INTEGER PRIMARY KEY AUTOINCREMENT,
        username VARCHAR(16) UNIQUE NOT NULL,
        email VARCHAR UNIQUE NOT NULL,
        password VARCHAR NOT NULL,
        hsex VARCHAR(2),
        height REAL(6),
        weight VARCHAR(20),
        level INTEGER,
        goal REAL(6),
        streakcount INTEGER
        )""")

    with sqlite3.connect(dbpath) as conn:
        cursor = conn.cursor()
        cursor.execute("""
        CREATE TABLE calorietrack (
            username VARCHAR(16) UNIQUE NOT NULL,
            calories VARCHAR,
            graphpoints VARCHAR
        )
        """)








if __name__=="__main__":
    schema()