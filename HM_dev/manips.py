#import math?

def get_weight(weight):
    nweight = str(weight.keys())
    return nweight

def bmi_calc(weight, height):
    #convert height to meters
    cheight = float(round(height/100), 4)
    fheight = float(round(cheight*cheight), 4)
    
    #convert weight to kilograms
    fweight = float(round(weight/2.205), 4)

    #BMI formula courtesy of CDC, available at cdc.gov
    bmi = float(round(fweight/fheight), 2)
    return bmi

#Mifflin-St Jeor Equation for basal metabolic rate
def mifflinstjeor(fheight, fweight, hsex, age):
    if hsex == "M":
        bmrmsj = float(round(10*fweight + 6.25*fheight - 5*age + 5), 4)
    else:
        bmrmsj = float(round(10*fweight + 6.25*fheight - 5*age - 161), 4)
    return bmrmsj

#Revised Harris-Benedict Equation for basal metabolic rate
def rharrisbenedict(fheight, fweight, hsex, age):
    if hsex == "M":
        bmrhb = float(round(13.397*fweight + 4.799*fheight - 5.677*age + 88.362), 4)
    else:
        bmrhb = float(round(9.247*fweight + 3.098*fheight - 4.330*age + 447.593), 4)
    return bmrhb

#Katch-McArdle Equation for basal metabolic rate
def katchmcardle(fweight, bmi):
    bmrkm = float(round(370 + 21.6*(1-bmi)*fweight), 4)
    return bmrkm

#Average the 3 BMR equations to get our use case
def bmr_avg(fheight, fweight, hsex, age, bmi):
    bmravg = float(round(mifflinstjeor(fheight, fweight, hsex, age) + rharrisbenedict(fheight, fweight, hsex, age) + katchmcardle(fweight, bmi)), 2)
    return bmravg

def calorie_eq():
    pass

def graph_vectors(weight, timelapsed):
    x = timelapsed
    y = weight
    return (x, y)

def vector_list(whlist):
    vectorlist = []
    x=0
    y=0
    for _ in whlist:
        vectorlist.append({
            x:y
        })

def weight_delta():
    pass