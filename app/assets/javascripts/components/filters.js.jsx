(function(root) {
  'use strict';

  var defaultFilters = { min: 1, max: 10 };

  root.Filters = React.createClass({

    getInitialState: function() {
      return (defaultFilters);
    },

    render: function() {
      return(
        <div className="filters">
          <label id="filters">Minimum Seats:</label>&nbsp;&nbsp;
          <select id="filters" name="filters">
            <option selected disabled hidden value=''></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>&nbsp;&nbsp;&nbsp;
          <label id="filters">Maximum Seats:</label>&nbsp;&nbsp;
          <select id="filters" name="filters">
            <option selected disabled hidden value=''></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      );
    }
  });

}(this));
