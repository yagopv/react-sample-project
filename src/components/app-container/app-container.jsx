import React from 'react';
import { PostList } from '../post-list/post-list';
import { PostDetail } from '../post-detail/post-detail';
import { Search } from '../search/search.jsx';

import './app-container.scss';

var AppContainer = React.createClass({
    getInitialState: function () {
        return {
            posts: [],
            selectedPost: null,
            searchTerm: ''
        }
    },
    componentDidMount: function () {
        var _this = this;
        window.fetch('http://jsonplaceholder.typicode.com/posts', {
            method: 'get'
        }).then(function(response) {
            return response.json();
        }).then(function (json) {
            _this.originalPosts = json;
            _this.setState({
                posts: json
            });
        });
    },
    onSelectPost: function (post) {
        this.setState({ selectedPost: post });
    },
    onSearchChange: function (search) {
        var thePosts = [];
        this.originalPosts.forEach(function (post) {
            if (post.title.indexOf(search) !== -1) {
                thePosts.push(post);
            }
        });

        this.setState({
            posts: thePosts
        })
    },
    render: function () {
        var layout = null;
        if (this.state.selectedPost) {
            layout = <PostDetail post={this.state.selectedPost} onSelectPost={this.onSelectPost}></PostDetail>;
        } else {
            layout = <PostList posts={this.state.posts} onSelectPost={this.onSelectPost}></PostList>;
        }
        return (
            <div>
                <div className="jumbotron">
                    <h1>My ReactJS Blog Test Application</h1>
                </div>
                <Search onSearchChange={this.onSearchChange} />
                { layout }
            </div>
        );
    }
});

export { AppContainer }