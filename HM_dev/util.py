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
    n = 0
    for objet in food:
        q = food[n]
        idescr = q["description"]
        foodlist.append(idescr)
        n = n+1
    return("newblob")

#return results to user perspective
def ret_results(listitem):
    '''
    for thing in listitem:
        fdict = thing[0]
        retitem = fdict["description"]
        return(retitem)
    '''
    pass

#update the graph info/dynamic
'''
def upd_graph():
    pass
'''