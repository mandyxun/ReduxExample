import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
    //console.log('Action received', action);
    switch (action.type){
        case FETCH_WEATHER: 
            //ES5 NOT state.push(action.payload.data) we create new array, not modify state 
            return state.concat([action.payload.data]);
            //ES6
            //return [action.payload.data, ...state];//[city, city, city] NOT [city, [city, [city]]]
    }
    //console.log('state', state);
    return state;
    
}