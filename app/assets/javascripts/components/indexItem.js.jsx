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
      // this.map.panTo(latLng);
    },

    render: function() {
      return (
        <div onClick={this.show}>
          <ul>
            <li>{this.props.bench.description}</li>
            <li>Seating: {this.props.bench.seating}</li>
          </ul>
        </div>
      );
    }
  });

}(this));
