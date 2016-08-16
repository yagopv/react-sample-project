import React from 'react';
import { Post } from '../post/post';

import './post-list.scss';

var PostList = React.createClass({
    render: function () {
        return (
            <div className="post-list">
                {this.props.posts.map(function (post) {
                    return <Post key={post.id} post={post} onSelectPost={this.props.onSelectPost} />
                }, this)}
            </div>
        );
    }
});

export { PostList };