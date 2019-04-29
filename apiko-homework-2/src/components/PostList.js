import React, { Component } from 'react'
import PostListItem from './PostListItem';
import '../index.css';

class PostList extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.posts.map(post => {
                    return (
                        <PostListItem
                            key={post.id}
                            title={post.title}
                            body={post.body}
                        />
                    )
                })}
            </React.Fragment>
        )
    }
}

export default PostList;