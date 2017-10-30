import React, {Component} from 'react';
import {connect} from 'react-redux';
//import {selectBook} from '../actions/index';
//import {bindActionCreators } from 'redux';

class WeatherList extends Component {
    renderWeather(cityData){
        //console.log(cityData);
        const name = cityData.city.name;
            return (
                <tr key={name}>
                    <td>{name}</td>
                </tr>
            );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th> City </th>
                        <th> Temperature </th>
                        <th> Pressure </th>
                        <th> Humidity </th>
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