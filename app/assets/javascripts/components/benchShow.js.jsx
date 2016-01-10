(function(root) {
  'use strict';

  root.BenchShow = React.createClass({
    render: function() {
      var bench = this.props.bench;
      return (
        <div className="bench-index">
          <img className="large" src={bench.image_url}/>
          <ul className="bench-info">
            <li>
              <strong>Latitude</strong>:&nbsp;&nbsp;
              {bench.lat}</li>
            <li>
              <strong>Longitude</strong>:&nbsp;&nbsp;
              {bench.lng}</li>
            <li>
              <strong>Seating Capacity</strong>:&nbsp;&nbsp;
              {bench.seating}</li>
            <li>
              <strong>Description</strong>:&nbsp;&nbsp;
              {bench.description}</li>
          </ul>
          <ul className="reviews">
            <h3>Reviews</h3>
            <li>Reviews feature coming soon!</li>
          </ul>
        </div>
      );
    }
  });

}(this));
