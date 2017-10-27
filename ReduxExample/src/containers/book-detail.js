import React, {Component } from 'react';
import {connect} from 'react-redux';


class BookDetail extends Component{
    render(){
        if (!this.props.book){
            return <div>Select a book to get started.</div>;
        }
        return(
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state){
    //Whatever is returned will show up as props
    //inside of BookDetail
    return {
        book: state.activeBook
    };
}


//Promote BookDetal from a component to a container 
//it needs to know about this new dispatch method,selectbook. 
//Make it available as a props.
export default connect(mapStateToProps)(BookDetail);