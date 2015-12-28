(function(root) {
  'use strict';

  root.Search = React.createClass({
    mixins: [ReactRouter.History],

    getInitialState: function() {
      return ({benches: BenchStore.all()});
    },

    componentDidMount: function() {
      BenchStore.addChangeListener(this._onChange);
      ApiUtil.fetchBenches();
    },

    componentWillUnmount: function() {
      BenchStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
      this.setState({benches: BenchStore.all()});
    },

    handleMapClick: function(coordinates) {
      this.props.history.pushState(null, "benches/new", coordinates);
    },

    render: function() {
      return (
        <div>
          <Map handleMapClick={this.handleMapClick} initialBenches={this.state.benches}/>
          <Index benches={this.state.benches}/>
          <Guide/>
        </div>
      );
    }
  });

}(this));
