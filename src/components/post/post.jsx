import React from 'react';

var Post = React.createClass({
   showPost: function (arg1, arg2, e) {
       e.preventDefault();
       this.props.onSelectPost(this.props.post);
       console.log(arg1, arg2, e, this);
   },
   render: function () {
      return (
          <div>
              <h2 className="lead">
                  <a href="" onClick={this.showPost.bind(this, 'arg1', 'arg2')}>{ this.props.post.title.toUpperCase() }</a>
              </h2>
              <p>{ this.props.post.body } </p>
          </div>
      );
   }
});

export { Post };