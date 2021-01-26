from datetime import datetime
from user import User

def extract(weight):
    dbdt = str(weight.values())
    return dbdt

def streaks(weight):
    dbdt=extract(weight)
    etime=dtcheck(dbdt)
    if etime > 24 & etime < 36:
        streak = 1
    else:
        streak = 0
    return streak

def days_logged(streak, weight_list):
    dlog = 0
    if streak > 7:
        dlog = 7
        if streak > 14:
            dlog = 14
            if streak > 21:
                dlog = 21
    else:
        for _ in weight_list:
            dlog+=1
    return dlog


def dtcheck(db_datetime):
    cur_datetime = datetime.now()
    etime = cur_datetime - db_datetime
    return etime