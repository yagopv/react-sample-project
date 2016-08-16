import React from 'react';

var Search = React.createClass({
    handleChange: function(e) {
        this.props.onSearchChange(e.target.value);
    },
    render: function () {
       return (
           <div className="row">
               <div className="form-group col-xs-6 offset-xs-3">
                   <input className="form-control col-xs-12"
                          type="text"
                          value={this.searchTerm}
                          placeholder="Enter your search term ..."
                          onChange={this.handleChange} />
               </div>
               <br />
           </div>
       );
   }
});

export { Search }