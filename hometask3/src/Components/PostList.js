import React, {Component} from 'react';
import PostListItem from './PostListItem';

class PostList extends Component {
    render() {
        const data = this.props.data;
        const listToShow = data.slice(0, this.props.shownPosts);
        return (
            <React.Fragment>
            {listToShow.map( post => {
                return (
                    <PostListItem data={post} key={post.id} />
                );
            })}
            </React.Fragment>
        )
    }
}

export default PostList;