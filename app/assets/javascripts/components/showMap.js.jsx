(function(root) {
  'use strict';

  root.ShowMap = React.createClass({

    getInitialState: function() {
      return {
        bench: {}
      };
    },

    componentDidMount: function() {
      BenchStore.addChangeListener(this._onChange);
      var benchId = parseInt(this.props.params.benchId);
      var bench = BenchStore.find(benchId);
      if (bench) {
        this.setState({bench: bench}, this.generateMap(bench.lat, bench.lng));
      } else {
        ApiUtil.fetchBenches();
      }
    },

    componentWillUnmount: function() {
      BenchStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
      var benchId = parseInt(this.props.params.benchId);
      var bench = BenchStore.find(benchId);
      this.setState({bench: bench}, this.generateMap(bench.lat, bench.lng));
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
