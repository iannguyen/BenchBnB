(function(root) {
  'use strict';

  root.BenchShow = React.createClass({

    getInitialState: function() {
      return ({
        bench: {}
      });
    },

    componentDidMount: function() {
      BenchStore.addChangeListener(this._onChange);
      var benchId = parseInt(this.props.params.benchId);
      var bench = BenchStore.find(benchId);
      if (bench) {this.setState({bench: bench});} else {ApiUtil.fetchBenches();}
    },

    componentWillUnmount: function() {
      BenchStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
      var benchId = parseInt(this.props.params.benchId);
      var bench = BenchStore.find(benchId);
      this.setState({bench: bench});
    },

    render: function() {
      var bench = this.state.bench;
      return (
        <div className="bench-index">
          <ul className="bench-info">
            <li>{bench.image_url}</li>
            <li><strong>Latitude</strong>: {bench.lat}</li>
            <li><strong>Longitude</strong>: {bench.lng}</li>
            <li><strong>Seating Capacity</strong>: {bench.seating}</li>
            <li><strong>Description</strong>: {bench.description}</li>
            <ul className="reviews">
              <h3>Reviews</h3>
              <li>Reviews feature coming soon!</li>
            </ul>
          </ul>
        </div>
      );
    }
  });

}(this));
