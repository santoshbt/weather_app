import { FETCH_WEATHER } from  '../actions/index';

export default function(state= [], action){
  switch(action.type){
    case FETCH_WEATHER:
      // return state.concat([action.payload.data]);
      return [ action.payload.data, ...state ]; // compact way of creating new array
  }

  return state;
}



/// to handle the payload promise
