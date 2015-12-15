(function(root) {
  'use strict';

  root.BenchShow = React.createClass({

    getInitialState: function() {
      return ({bench: {}});
    },

    componentDidMount: function() {
      BenchStore.addChangeListener(this._onChange);
      var benchId = parseInt(this.props.params.benchId);
      var bench = BenchStore.find(benchId);
      if (bench) {
        this.setState({bench: bench});
      } else {
        ApiUtil.fetchBenches();
      }
    },

    _onChange: function() {
      var benchId = parseInt(this.props.params.benchId);
      var bench = BenchStore.find(benchId);
      this.setState({ bench: bench });
    },

    render: function() {
      if (this.state.bench.description) {
        return(
          <div className="bench-index">
            {this.state.bench.description}
          </div>
        );
      } else {
        return <div></div>;
      }
    }
  });

}(this));
