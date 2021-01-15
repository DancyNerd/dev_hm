from datetime import datetime

class Levels:
    def __init__(self, level, plateau, etime, streak):
        self.level = level
        self.plateau = plateau
        self.etime = etime
        self.streak = streak

    #determine current level
    def gen_lvl(self, level):
        funcstr = "level_"
        funcstr.join(level)
        return funcstr
    
    def level_1(self, dayslogged):
        if dayslogged > 6:
            return 2
        else:
            return 1
    
    def level_2(self, dayslogged, streak):
        if dayslogged > 13 and streak > 3:
            return 3
        else:
            return 2 

    def level_3(self, streak):
        if streak > 20:
            return 4
        else:
            return 3
    
    def level_4(self, streak, plateau):
        if streak > 6 and plateau > 1:
            return 5
        else:
            return 4

    def level_5(self, streak):
        if streak > 13:
            return 6
        else:
            return 5
        pass

    def level_6(self, streak):
        if streak > 20:
            return 7
        else:
            return 6

    def level_7(self, weight, goalweight):
        goals = float(round(weight-goalweight), 2)
        if goals < 1.5:
            return 8
        else:
            return 7

    def reset_check(self, etime):
        if self.etime > 14:
            return True
        else:
            return False




"""
if __name__=="__main__":
    Levels()
"""