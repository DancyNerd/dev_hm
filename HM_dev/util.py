import requests

API_STEM = "https://developer.nrel.gov/api/"
TOKEN = "ZDTgbZ7bnPCNIQbmIOjKRIzJ4S5jFEeTvvYwDYHB"

#take user input and send it to FDA API for search
def uinp_search(userinp):
    url = f'https://api.nal.usda.gove/fdc/v1/foods/search?api_key={TOKEN}&query={userinp}'
    r = requests.get(url)
    print(r.status_code)
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