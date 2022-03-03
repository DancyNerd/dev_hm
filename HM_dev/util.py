import requests

#This script does not currently have implementation plans, so it isn't completed.

API_STEM = "https://developer.nrel.gov/api/"
TOKEN = "ZDTgbZ7bnPCNIQbmIOjKRIzJ4S5jFEeTvvYwDYHB"

#take user input and send it to FDA API for search
def uinp_search(userinp):
    thequery = userinp.get('calories')
    url = f'https://api.nal.usda.gov/fdc/v1/foods/search?api_key={TOKEN}&query={thequery}'
    r = requests.get(url)
    print(r.text)
    return('blob') 

#acquire/parse results for caloric intake
def cal_parse():
    pass

#return results to user perspective
def ret_results():
    pass

#update the graph info/dynamic
'''
def upd_graph():
    pass
'''