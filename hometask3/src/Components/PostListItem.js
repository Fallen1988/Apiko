import React, { Component } from 'react';

class PostListItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const data = this.props.data;
        return (
            <li className="App-post">
                <h3>{data.title}</h3>
                <p>{data.body}</p>
            </li>
        )
    }
}

export default PostListItem;