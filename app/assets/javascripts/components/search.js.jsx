(function(root) {
  'use strict';

  root.Search = React.createClass({
    mixins: [ReactRouter.History],

    handleMapClick: function(coordinates) {
      this.props.history.pushState(null, "/benches/new", coordinates);
    },

    render: function() {
      return (
        <div>
          <Map handleMapClick={this.handleMapClick}/>
          <Index/>
        </div>
      );
    }
  });

}(this));
