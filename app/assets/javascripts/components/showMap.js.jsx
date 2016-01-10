(function(root) {
  'use strict';

  root.ShowMap = React.createClass({
    componentWillReceiveProps: function(props) {
      this.generateMap(props.bench.lat, props.bench.lng);
    },

    generateMap: function(lat, lng) {
      var map = React.findDOMNode(this.refs.map);
      var mapOptions = {
        center: {
          lat: parseFloat(lat),
          lng: parseFloat(lng)
        },
        zoom: 15
      };
      this.map = new google.maps.Map(map, mapOptions);
      this.renderMarker(mapOptions.center);
    },

    renderMarker: function(coordinates) {
      var marker = new google.maps.Marker({position: coordinates, animation: google.maps.Animation.DROP});

      marker.setMap(this.map);
    },

    render: function() {
      return (
        <div className="map" ref="map">
          SHOW MAP SHOULD BE HERE
        </div>
      );
    }
  });

}(this));
