(function(root) {
  'use strict';

  root.ReviewForm = React.createClass({
    getInitialState: function() {
      return(
        {bench_id: "", body: ""}
      );
    },

    componentWillReceiveProps: function(newProps) {
      this.setState({
        bench_id: this.props.bench.id,
        body: ""
      });
    },

    createReview: function(e) {
      e.preventDefault();
    },

    render: function() {
      debugger;
      return(
        <div className="review-form">
          REVIEW FORM HERE
        </div>
      );
    }

  });

}(this));
