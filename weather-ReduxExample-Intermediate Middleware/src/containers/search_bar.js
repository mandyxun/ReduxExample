import React, {Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators } from 'redux';
import {fetchWeather } from '../actions/index';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {term: ''};
        this.onInputChange=this.onInputChange.bind(this);
        this.onFormSubmit=this.onFormSubmit.bind(this);
    }
    render(){
        return(
            <div>
                <form onSubmit= {this.onFormSubmit} className="input-group">
                    <input 
                        placeholder="Get a five-day forecast in your favourite cities"
                        className="form-control"
                        value={this.state.term}
                        onChange={this.onInputChange}
                        />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary">submit</button>
                    </span>
                </form>
            </div>
        );
    }

    onInputChange(event){
        //console.log(term.target.value);
        this.setState({term : event.target.value});
        //this.props.onSearchTermChange(term);
    }
    
    onFormSubmit(event) {
        event.preventDefault();
        
        //we need to go and fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }
}

// function mapStateToProps(state){
//     //Whatever is returned will show up as props
//     //inside of BookDetail
//     return {
//         book: state.activeBook
//     };
// }

//Anything returned from this function will end up as props
//on the BookList container
function mapDispatchToProps(dispatch){
    //whenever selectBook is called, the result should be passed
    //to all our reducers  this.props.selectBook
    return bindActionCreators({fetchWeather}, dispatch);
}

//Promote BookDetal from a component to a container 
//it needs to know about this new dispatch method,selectbook. 
//Make it available as a props.
export default connect(null, mapDispatchToProps)(SearchBar);