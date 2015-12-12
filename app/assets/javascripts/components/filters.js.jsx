(function(root) {
  'use strict';

  var defaultFilters = { min: 1, max: 5 };

  root.Filters = React.createClass({

    getInitialState: function() {
      return (defaultFilters);
    },

    updateMin: function(e) {
      e.preventDefault();
      var newMin = parseInt(e.target.value);
      this.setState({min: newMin});
      console.log("updateMin");
      console.log(this.state);
    },

    updateMax: function(e) {
      e.preventDefault();
      var newMax = parseInt(e.target.value);
      this.setState({max: newMax});
    },

    render: function() {
      console.log(this.state);
      return(
        <div className="filters">
          <label id="min-seats">Minimum Seats:</label>&nbsp;&nbsp;
          <select id="min" name="min" onChange={this.updateMin} defaultValue="1">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>&nbsp;&nbsp;&nbsp;

          <label id="max-seats">Maximum Seats:</label>&nbsp;&nbsp;
          <select id="max" name="max" onChange={this.updateMax} defaultValue="5">
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
