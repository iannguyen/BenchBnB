(function(root) {
  'use strict';

  root.ShowMap = React.createClass({

    getInitialState: function() {
      return {bench: {}};
    },

    componentDidMount: function() {
      // find bench
      // map currently centers on the same location
      this.generateMap();
    },

    generateMap: function() {
      var map = React.findDOMNode(this.refs.map);
      var mapOptions = {
        center: {
          lat: parseFloat(this.props.location.query.lat),
          lng: parseFloat(this.props.location.query.lng)
        },
        zoom: 15
      };
      this.map = new google.maps.Map(map, mapOptions);
      this.renderMarker(mapOptions.center);
    },

    renderMarker: function(coordinates) {
      var marker = new google.maps.Marker({
        position: coordinates,
        animation: google.maps.Animation.DROP
      });

      marker.setMap(this.map);
    },

    render: function() {
      return(
        <div className="map" ref="map">
          SHOW MAP SHOULD BE HERE
        </div>
      );
    }
  });

}(this));
