(function(root) {
  'use strict';

  root.Map = React.createClass({
    mixins: [ReactRouter.History],

    getInitialState: function() {
      return {
        markers: [],
        filters: [],
        benches: this.props.initialBenches,
        bounds: this.getMapBounds
      };
    },

    componentDidMount: function() {
      this.generateMap();
      BenchStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
      BenchStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
      var newBenches = BenchStore.all();
      this.state.markers.forEach(function(marker) {
        marker.setMap(null);
        marker = null;
      });
      this.setState({
        markers: [],
        benches: newBenches
      }, function() {
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
      var north = bounds.N.j;
      var south = bounds.N.N;
      var east = bounds.j.N;
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

    isInBounds: function(coordinates) {
      var bounds = this.map.getBounds();
      var north = bounds.O.j;
      var south = bounds.O.O;
      var east = bounds.j.O;
      var west = bounds.j.j;
      var markerLat = coordinates.lat();
      var markerLng = coordinates.lng();
      return (markerLat <= north && markerLat >= south && markerLng <= east && markerLng >= west);
    },

    generateMapMarkers: function() {
      var that = this;
      for (var i = 0; i < this.state.benches.length; i++) {
        var coordinates = new google.maps.LatLng(this.state.benches[i].lat, this.state.benches[i].lng);
        var marker = new google.maps.Marker({
          position: coordinates,
          title: this.state.benches[i].description,
          bench: this.state.benches[i]
        });
        this.state.markers.push(marker);
      }
      this.setMarkers();
    },

    setMarkers: function() {
      this.state.markers.forEach(function(marker) {
        marker.setMap(this.map);
        var coordinates = {
          lat: marker.bench.lat,
          lng: marker.bench.lng
        };
        marker.addListener('click', function() {
          this.history.pushState(null, "benches/" + marker.bench.id, coordinates);
        }.bind(this));
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
