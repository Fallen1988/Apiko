import React, { Component } from 'react';
import './App.css';
import PostList from './Components/PostList';
import MoreButton from './Components/MoreButton';
import SearchInput from './Components/SearchInput';
import ErrorMessage from './Components/ErrorMessage';
const showOnClick = 10;
const SHOW_POSTS = 10;

const API = "https://jsonplaceholder.typicode.com/";
const fetchData = entity =>
    fetch(API + entity).then(response => response.json());

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          shownPosts: SHOW_POSTS,
          posts: [],
          postsToRender: [],
          isLoading: true,
      };
      this.updateShownPosts = this.updateShownPosts.bind(this);
      this.updateSearchList = this.updateSearchList.bind(this);
      this.firstData = this.firstData.bind(this);
  }

  componentDidMount() {
      this.timerId = setInterval(() => {
          this.fetchingData();
      }, 5000);
  }

  componentWillUnmount() {
      clearInterval(this.timerId);
  }

  fetchingData() {
      Promise.all([fetchData("posts")]).then(
          ([posts]) => {
              this.setState({
                  posts,
                  isLoading: false,
              });
          }
      );
  }

  updateShownPosts(value) {
      this.setState({
          shownPosts: this.state.shownPosts + value,
      })
  };

  updateSearchList(list) {
      this.setState({
          postsToRender: list,
          shownPosts: 10,
      })
  };

  firstData() {
      return this.setState({
          postsToRender: this.state.posts
      })
  };

  render() {
      const { shownPosts, posts, postsToRender, isLoading } = this.state;
      const noItems = postsToRender.length > 0 ? false : true;
      if (isLoading) {
          return <h3>Loading...</h3>
      }

      return (
          <React.Fragment>
              <SearchInput
                  data={posts}
                  updateSearchList={this.updateSearchList}/>
              {noItems && <ErrorMessage />}
              <PostList
                  data={postsToRender}
                  posts={this.firstData}
                  shownPosts={shownPosts} />
              {!noItems && postsToRender.length > showOnClick &&
                  <MoreButton
                      showOnClick={showOnClick}
                      updateShownPosts={this.updateShownPosts} />}
          </React.Fragment>
      );
  }
}

export default App;