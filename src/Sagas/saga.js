import { takeLatest, put, call, takeEvery,all } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_LOCATIONS,
} from "../Redux/Actions/AxiosActions/actionTypes";

import * as actions from "../Redux/Actions/AxiosActions/actions";
import Radar from 'radar-sdk-js';

function* helloSaga() {
  console.log('Hello Sagas!')
}

function* watchActions() {
  yield takeLatest(FETCH_LOCATIONS, fetchCategoryData);
}

export function* watchActionsSaga() {
  yield all ([
    watchActions(),
    helloSaga() 
  ])
}

const headers = {
  'x-rapidapi-host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com',
  'x-rapidapi-key': '8e67de32b0msh8b689f668a3ae56p15ad67jsnd89598c7f6cd'
};
// Radar.initialize(publishableKey);
// Radar.setUserId(userId);
// Radar.setMetadata(metadata);
// Radar.setDescription(description);


function* fetchCategoryData(action) {
  const id = action.payload;
  const url = "https://rapidapi.p.rapidapi.com/categories/list${id}";
  const options = {
    method: 'GET',
    url: 'https://rapidapi.p.rapidapi.com/categories/list',
    params: {country: 'in', lang: 'en'},
    headers: headers
  };
  Radar.autocomplete({
    query: 'brooklyn roasting',
    near: {
      latitude: 40.783826,
      longitude: -73.975363
    },
    limit: 10
  }, function(err, result) {
    if (!err) {
      // do something with result.addresses
    }
  });
  console.log("fetchPlaces:", url);
  yield put(actions.fetchRequest());
  try {
    const response = yield call(() => axios.request(options));
    const categories = response.data;
    yield put(actions.fetchLocationSuccess(categories));
  } catch (error) {
    yield put(actions.fetchFailure("Fetch Places Error: " + error.message));
  }
}

