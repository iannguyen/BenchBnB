(function(root) {
  'use strict';

  root.Guide = React.createClass({
    render: function() {
      return(
        <div className="guide">
          <h1>How To Use BenchBnB</h1>
          <ul>
            <li>Browse through benches by dragging the map or filtering by seating capacity!</li>
            <li>Click the bench description or map marker to see more information about the bench!</li>
            <li>Click on the map to create a new bench at that location!</li>
          </ul>
        </div>
      );
    }
  });

}(this));
