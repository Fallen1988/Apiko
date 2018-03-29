import React, { Component } from 'react';

class SearchInput extends Component {
    handleChange = ({ target: {value}}) => {
        const data = this.props.data.slice();
        let listToRender = [];
        data.filter( post => {
            if ( post.title.match(value)) {
                listToRender.push(post);
            }
            return post;
        });
        return this.props.updateSearchList(listToRender);
    };
    render() {
        return (
            <input type="search" className="App-search-input"  placeholder="search"
                   onChange={this.handleChange}/>
        )
    }
}

export default SearchInput;