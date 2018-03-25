import React, {Component} from 'react';
import PostListItem from './PostListItem';

class PostList extends Component {
    render() {
        const list = this.props.data;
        return (
            <React.Fragment>
                {list.map(( item, index) => {
                    if (index >= this.props.shownPosts) return '';
                    return (
                        <PostListItem data={item} key={item.id} />
                     );
                })}
            </React.Fragment>
        )
    }
}

export default PostList;