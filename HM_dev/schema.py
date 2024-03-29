#DB segment, import db
import sqlite3



#Create users table in db with list of user-oriented variables
def schema(dbpath="hmedev.db"):
    with sqlite3.connect(dbpath) as conn:
        cursor=conn.cursor()
        cursor.execute("""
        CREATE TABLE users (
        username VARCHAR(16) UNIQUE NOT NULL,
        email VARCHAR UNIQUE NOT NULL,
        password VARCHAR NOT NULL,
        hsex VARCHAR(2),
        height REAL(6),
        weight BLOB(20),
        level INTEGER,
        goal REAL(6),
        lentry DATE,
        streakcount INTEGER, 
        plateau INTEGER
        )""")

    #Also create calorietrack table in db with list of variables
    with sqlite3.connect(dbpath) as conn:
        cursor = conn.cursor()
        cursor.execute("""
        CREATE TABLE calorietrack (
            user VARCHAR(16) UNIQUE NOT NULL,
            calories VARCHAR,
            graphpoints VARCHAR, 
            FOREIGN KEY (user) REFERENCES users(username)
        )
        """)

#Is a table for cookie handling necessary/a good idea?







if __name__=="__main__":
    schema()

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