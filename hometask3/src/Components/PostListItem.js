import React, { Component } from 'react';

class PostListItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        const {title, body} = this.props.data;
        return (
            title !== nextProps.data.title ||
            body !== nextProps.data.body
        );
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