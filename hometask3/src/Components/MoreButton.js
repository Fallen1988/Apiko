import React, { Component } from 'react';

class MoreButton extends Component {
    showMorePosts = () => {
        this.props.updateShownPosts(this.props.showOnClick)
    };

    render() {
        return (
            <button className="App-btn" onClick={this.showMorePosts}>Add 10 more posts</button>
        )
    }
}

export default MoreButton;