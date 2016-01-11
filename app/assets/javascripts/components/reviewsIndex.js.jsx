(function(root) {
  'use strict';

  root.ReviewsIndex = React.createClass({
    getInitialState: function() {
      return(
        {bench_id: "", body: "", reviewsList: []}
      );
    },

    componentWillReceiveProps: function(newProps) {
      this.setState({
        bench_id: newProps.bench.id,
        body: "",
        reviewsList: this.reviewsList(newProps.bench.reviews)
      });
    },

    reviewsList: function(reviews) {
      if (reviews.length === 0) {
        return ["Be the first to review this bench!"];
      } else {
        return reviews;
      }
    },

    createReview: function(e) {
      e.preventDefault();
      var bench = {
        bench_id: this.state.bench_id,
        body: e.currentTarget.body.value
      };
      ApiUtil.createReview(bench);
    },

    render: function() {
      var reviews = this.state.reviewsList;
      return(
        <div className="review-form">
          <h3>Reviews</h3>
          {
            reviews.map(function(review) {
              return <div>{review}</div>;
            })
          }
        </div>
      );
    }

  });

}(this));
