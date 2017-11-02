import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityData){
        //console.log(cityData);
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const {lon, lat} = cityData.city.coord;
        //const lat = cityData.city.coord.lat;
        //const lon = cityData.city.coord.lon;

            return (
                <tr key={name}>
                    <td><GoogleMap lon={lon} lat={lat} /></td>
                    <td><Chart data={temps} color="orange" units="K"/></td>
                    <td><Chart data={pressures} color="green" units="hPa"/></td>
                    <td><Chart data={humidities} color="black" units="%"/></td>
                </tr>
            );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th> City </th>
                        <th> Temperature (K) </th>
                        <th> Pressure (hPa)</th>
                        <th> Humidity (%)</th>
                    </tr>
                </thead>
                <tbody> 
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}){
    //Whatever is returned will show up as props
    //inside of BookList
    //const weather = state.weather;
    return {weather};//==={weather: weather}
}

// //Anything returned from this function will end up as props
// //on the BookList container
// function mapDispatchToProps(dispatch){
//     //whenever selectBook is called, the result should be passed
//     //to all our reducers  this.props.selectBook
//     return bindActionCreators({selectBook: selectBook}, dispatch);
// }

//Promote BookList from a component to a container 
//it needs to know about this new dispatch method,selectbook. 
//Make it available as a props.
export default connect(mapStateToProps)(WeatherList);