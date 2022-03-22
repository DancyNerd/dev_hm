import requests
import json

#This script does not currently have implementation plans, so it isn't completed.

API_STEM = "https://developer.nrel.gov/api/"
TOKEN = "ZDTgbZ7bnPCNIQbmIOjKRIzJ4S5jFEeTvvYwDYHB"

#take user input and send it to FDA API for search
def uinp_search(userinp):
    thequery = userinp.get('calories')
    url = f'https://api.nal.usda.gov/fdc/v1/foods/search?api_key={TOKEN}&query={thequery}'
    r = requests.get(url)
    rdict = dict(r.json())
    retitem = cal_parse(rdict)
    return(retitem) 

#acquire/parse results for caloric intake
def cal_parse(rdict):
    food = rdict["foods"]
    foodlist = []
    for objet in food:
        idescr = objet["description"]
        foodlist.append(idescr)
    retitem = ret_results(foodlist)
    return(retitem)

#return results to user perspective
def ret_results(foodlist):
    n=0
    retdict = {}
    for thing in foodlist:
        q = str(n)
        retdict["item"+q] = thing
        n = n+1
    #retitem = jsonify(retdict)
    retitem = json.dumps(retdict)
    return(retitem)

#update the graph info/dynamic
'''
def upd_graph():
    pass
'''