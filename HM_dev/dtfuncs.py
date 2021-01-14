from datetime import datetime

def conversion():
    pass

def streaks():
    pass

def days_logged():
    pass


def dtcheck(db_datetime):
    cur_datetime = datetime.now()
    etime = cur_datetime - db_datetime
    return etime