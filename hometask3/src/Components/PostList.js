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
            <React.Fragment>
            {listToShow.map( post => {
                return (
                    <PostListItem body={post.body} title={post.title} key={post.id} />
                );
            })}
            </React.Fragment>
        )
    }
}

export default PostList;