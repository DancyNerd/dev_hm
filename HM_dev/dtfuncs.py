from datetime import date, timedelta

def extract(weight):
    dbdt = str(weight.values())
    return dbdt

def streaks(lentry, streak, username):
    dbdt=lentry
    etime=dtcheck(dbdt)
    print("ETIME")
    print(etime)
    if etime == 1:
        streak += 1
    else:
        streak = 0
    return streak

def days_logged(streak, lentry_list):
    pass

def dtcheck(db_datetime):

    #Determine how long it's been since last weight log
    cur_date = date.today()
    yesterday = cur_date - timedelta(days=1)
    if yesterday == db_datetime:
        etime = 1
    else:
        etime = 0
    '''pos_dtelapse = []
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
    etime+=2'''
    return etime