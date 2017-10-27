import React, {Component } from 'react';
import {connect} from 'react-redux';


export default class BookDetail extends Component{
    constructor(props){
        super(props);
        this.state = {term: ''};
        this.onInputChange=this.onInputChange.bind(this);
    }
    render(){
        return(
            <div>
                <form className="input-group">
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
    onInputChange(term){
        console.log(term.target.value);
        this.setState({term : term.target.value});
        //this.props.onSearchTermChange(term);
    }
    
}

// function mapStateToProps(state){
//     //Whatever is returned will show up as props
//     //inside of BookDetail
//     return {
//         book: state.activeBook
//     };
// }


// //Promote BookDetal from a component to a container 
// //it needs to know about this new dispatch method,selectbook. 
// //Make it available as a props.
// export default connect(mapStateToProps)(BookDetail);