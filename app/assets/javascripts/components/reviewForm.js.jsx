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
        bench_id: newProps.bench.id,
        body: ""
      });
    },

    createReview: function(e) {
      e.preventDefault();
    },

    render: function() {
      return(
        <div className="review-form">
          REVIEWS COMING SOON!
        </div>
      );
    }

  });

}(this));
