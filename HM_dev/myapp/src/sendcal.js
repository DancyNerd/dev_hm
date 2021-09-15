import React from 'react';
import axios from 'axios';
import { ActionSheetIOS } from 'react-native';

//This file is for interaction with the FoodCentral API.

function ApiCall() {
    var apiUrl = "https://api.nal.usda.gov/fdc/v1/foods/search?api_key=ZDTgbZ7bnPCNIQbmIOjKRIzJ4S5jFEeTvvYwDYHB&query=";
    var searchParam = "swiss%20cheese"; //placeholder
    var sendUrl = apiUrl+searchParam
    axios.get(apiUrl)
        .then(response=> (this.info = response.data.bpi))
        .catch(error=> console.log(error))

}

export default ApiCall;