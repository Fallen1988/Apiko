import React, {Component} from 'react';
import PostListItem from './PostListItem';

class PostList extends Component {
    componentDidMount() {
        this.props.posts();
    }

    render() {
        const { data, shownPosts } = this.props;
        const listToShow = data.slice(0, shownPosts);
        return (
            <ul>
            {listToShow.map( post => {
                return (
                    <PostListItem body={post.body} title={post.title} key={post.id} />
                );
            })}
            </ul>
        )
    }
}

export default PostList;