import React, { Component } from 'react';
import './App.css';
import data from './data';
import PostList from './Components/PostList';
import MoreButton from './Components/MoreButton';

class App extends Component {
  constructor(){
      super();
      this.state = {
          shownPosts: 10,
          showOnClick: 10
      };
      this.updateShownPosts = this.updateShownPosts.bind(this)
  }

  updateShownPosts = (value) => {
      this.setState({ shownPosts: this.state.shownPosts + value })
  };

  render() {
      return (
          <React.Fragment>
              <PostList data={data} shownPosts={this.state.shownPosts} />
              <MoreButton showOnClick={this.state.showOnClick} updateShownPosts={this.updateShownPosts} />
          </React.Fragment>
      );
  }
}

export default App;
