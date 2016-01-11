(function(root) {
  'use strict';

  root.ShowPage = React.createClass({
    getInitialState: function() {
      return {
        bench: {}
      };
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

    componentWillUnmount: function() {
      BenchStore.removeChangeListener(this._onChange);
    },

    componentWillReceiveProps: function(newProps) {
      var benchId = parseInt(newProps.params.benchId);
      var bench = BenchStore.find(benchId);
      this.setState({bench: bench});
    },

    _onChange: function() {
      var benchId = parseInt(this.props.params.benchId);
      var bench = BenchStore.find(benchId);
      this.setState({bench: bench});
    },

    render: function() {
      return (
        <div>
          <ShowMap bench={this.state.bench}/>
          <BenchShow bench={this.state.bench}/>
          <ReviewForm bench={this.state.bench}/>
        </div>
      );
    }
  });

}(this));
