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
      return (
        <div className="bench-index">
          {this.state.bench.description}
        </div>
      );
    }
  });

}(this));
