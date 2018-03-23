import React, { Component } from 'react';
import './App.css';
import data from './data';
import PostList from './Components/PostList';
import MoreButton from './Components/MoreButton';

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          shownPosts: 10,
      };
      this.updateShownPosts = this.updateShownPosts.bind(this)
  }

  updateShownPosts = (value) => {
    this.setState({ shownPosts: this.state.shownPosts + value })
  };

  render() {
    return (
      <div className="App">
        <PostList data={data} shownPosts={this.state.shownPosts} />
        <MoreButton data={data} updateShownPosts={this.updateShownPosts} />
      </div>
    );
  }
}

export default App;
