import axios from 'axios';

const API_KEY ='4a5ecb335769214fae47ceeeaea2403c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";
export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);//Ajax request returns a promise 
    //console.log('Request:', request);
    //selectBook is an Action creator, it needs to return an action
    //an object with a type property 
    return {
        type: FETCH_WEATHER,
        payload: request //return the promise as a payload
    };
}