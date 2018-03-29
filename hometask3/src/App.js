import React, { Component } from 'react';
import './App.css';
import data from './data';
import PostList from './Components/PostList';
import MoreButton from './Components/MoreButton';
import SearchInput from './Components/SearchInput';
import ErrorMessage from './Components/ErrorMessage'

class App extends Component {
  constructor(){
      super();
      this.state = {
          shownPosts: 10,
          showOnClick: 10,
          dataToRender: data,
      };
      this.updateShownPosts = this.updateShownPosts.bind(this);
      this.updateSearchList = this.updateSearchList.bind(this);
  }

  updateShownPosts(value) {
      this.setState({
          shownPosts: this.state.shownPosts + value,
      })
  };

  updateSearchList(list) {
      this.setState({
          dataToRender: list,
          shownPosts: 10,
      })
  };

  render() {
      const list = this.state.dataToRender;
      const noItems = list.length > 0 ? false : true;
      return (
          <React.Fragment>
              <SearchInput
                  data={data}
                  updateSearchList={this.updateSearchList}/>
              {noItems && <ErrorMessage />}
              <PostList
                  data={this.state.dataToRender}
                  shownPosts={this.state.shownPosts} />
              {!noItems && list.length > this.state.showOnClick &&
                  <MoreButton
                      showOnClick={this.state.showOnClick}
                      updateShownPosts={this.updateShownPosts} />}
          </React.Fragment>
      );
  }
}

export default App;

