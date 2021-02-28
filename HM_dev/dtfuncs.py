from datetime import date, timedelta
from user import User

def extract(weight):
    dbdt = str(weight.values())
    return dbdt

def streaks(lentry, streak, username):
    dbdt=lentry
    etime=dtcheck(dbdt)
    if etime == 1:
        streak += 1
    elif etime >= 14:
        User.reset_lvl(username)
        streak=0
    else:
        streak = 0
    return streak

def days_logged(streak, lentry_list):
    pass

def dtcheck(db_datetime):

    #Determine how long it's been since last weight log
    cur_date = date.today()
    pos_dtelapse = []
    i=0
    while i < 14:
        pos_dtelapse.append(cur_date - timedelta(days=i))
        i+=1

    etime=0
    for daties in pos_dtelapse:
        if db_datetime==daties:
            return etime
        else:
            etime+=1
    etime+=2
    return etime