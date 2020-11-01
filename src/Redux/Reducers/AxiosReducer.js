import {
    FETCH_REQUEST,
    FETCH_FAILURE,
    FETCH_LOCATIONS_SUCCESS,
    SET_FILTER,
    SET_IMAGE
  } from '../Actions/AxiosActions/actionTypes'
  import AxiosInitialState from './InitialState/AxiosInitialState'
  
  const AxiosReducer = (state = AxiosInitialState, action) => {
    switch (action.type) {
      case SET_FILTER:
        state = {
          ...state,
          filterVal: action.payload
        }
        break;
      case SET_IMAGE:
      state = {
        ...state,
        image: action.payload
      }
      break;
      case FETCH_REQUEST:
        state = {
          ...state,
          loading: true
        }
        break;
        
      case FETCH_LOCATIONS_SUCCESS:
        state = {
          ...state,
          loading: false,
          locations: action.payload,
          error: ''
        }
        break;

      case FETCH_FAILURE:
        state = {
          ...state,
          loading: false,
          cuisines: [],
          error: action.payload
        }
      break;
    }
    return state;
  }
  
  export default AxiosReducer
  