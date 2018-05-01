import React, { Component } from 'react';

class PostListItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        const {title, body} = this.props;
        return (
            title !== nextProps.title ||
            body !== nextProps.body
        );
    }

    render() {
        const {title, body} = this.props;
        return (
            <li className="App-post">
                <h3>{title}</h3>
                <p>{body}</p>
            </li>
        )
    }
}

export default PostListItem;