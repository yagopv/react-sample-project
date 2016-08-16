import React from 'react';
import './post-detail.scss';

var PostDetail = React.createClass({
    back: function (event) {
        event.preventDefault();
        this.props.onSelectPost(null);
    },
    render: function () {
        return (
            <div className="post-detail">
                <h1 className="lead">{ this.props.post.id + '.  ' + this.props.post.title.toUpperCase() } </h1>
                <p>{ this.props.post.body } </p>
                <hr/>
                <a href="" onClick={this.back}>Back to List</a>
            </div>
        );
    }
});

export { PostDetail };