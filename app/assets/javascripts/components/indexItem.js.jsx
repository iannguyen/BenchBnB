(function(root) {
  'use strict';

  root.IndexItem = React.createClass({
    mixins: [ReactRouter.History],

    show: function(e) {
      e.preventDefault();
      var coords = {
        lat: this.props.bench.lat,
        lng: this.props.bench.lng
      };
      this.history.pushState(null, "/benches/" + this.props.bench.id, coords);
    },

    shortenDescription: function(description) {
      if (description.length < 50) {
        return description;
      } else {
        return description.slice(0,50) + "...";
      }
    },

    render: function() {
      return (
        <div onClick={this.show}>
          <ul>
            <li>{this.shortenDescription(this.props.bench.description)}</li>
            <li>Seating: {this.props.bench.seating}</li>
          </ul>
        </div>
      );
    }
  });

}(this));
