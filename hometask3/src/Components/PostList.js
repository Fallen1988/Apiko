import React, {Component} from 'react';
import PostListItem from './PostListItem';

class PostList extends Component {
    render() {
        const data = this.props.data;
        const listToShow = data.slice(0, this.props.shownPosts);
        return (
            <React.Fragment>
            {listToShow.map( li => {
                return (
                    <PostListItem data={li} key={li.id} />
                );
            })}
            </React.Fragment>
        )
    }
}

export default PostList;