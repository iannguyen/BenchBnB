(function(root) {
  'use strict';

  root.Map = React.createClass({

    getInitialState: function() {
      return {
        markers: [],
        filters: [],
        benches: this.props.initialBenches
      };
    },

    componentDidMount: function() {
      this.generateMap();
      BenchStore.addChangeListener(this._onChange);
      // FilterStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
      BenchStore.removeChangeListener(this._onChange);
      // FilterStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
      var newBenches = BenchStore.all();
      this.state.markers.forEach(function(marker) {
        marker.setMap(null);
        marker = null;
      });
      this.setState(
        {markers: [], benches: newBenches}, function() {
        this.generateMapMarkers();
      }.bind(this));
    },

    generateMap: function() {
      var map = React.findDOMNode(this.refs.map);
      var mapOptions = {
        center: {
          lat: 37.7758,
          lng: -122.435
        },
        zoom: 13
      };
      this.map = new google.maps.Map(map, mapOptions);
      this.renderMarkers();
      this.map.addListener('click', function(e) {
        var clickedLat = e.latLng.lat();
        var clickedLng = e.latLng.lng();
        var coords = {
          lat: clickedLat,
          lng: clickedLng
        };
        this.props.handleMapClick(coords);
      }.bind(this));
    },

    getMapBounds: function() {
      var bounds = this.map.getBounds();
      var north = bounds.O.j;
      var south = bounds.O.O;
      var east = bounds.j.O;
      var west = bounds.j.j;
      var limits = {
        boundaries: {
          north: north,
          south: south,
          east: east,
          west: west
        }
      };
      return limits;
    },

    generateMapMarkers: function() {
      for (var i = 0; i < this.state.benches.length; i++) {
        var coordinates = new google.maps.LatLng(this.state.benches[i].lat, this.state.benches[i].lng);
        var marker = new google.maps.Marker({
          position: coordinates,
          title: this.state.benches[i].description
        });
        this.state.markers.push(marker);
      }
      this.setMarkers();
    },

    setMarkers: function() {
      this.state.markers.forEach(function(marker) {
        marker.setMap(this.map);
      }.bind(this));
    },

    renderMarkers: function() {
      this.map.addListener('idle', function() {
        var bounds = this.getMapBounds();
        ApiUtil.fetchBenches(bounds);
      }.bind(this));
    },

    render: function() {
      return (
        <div className='map' ref='map'>
          Map should be here.
        </div>
      );
    }
  });

}(this));
