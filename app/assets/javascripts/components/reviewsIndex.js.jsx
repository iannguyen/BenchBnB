(function(root) {
  'use strict';

  root.ReviewsIndex = React.createClass({
    mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

    defaultAttributes: {
      bench_id: "",
      body: "",
      reviewsList: []
    },

    getInitialState: function() {
      return this.defaultAttributes;
    },

    componentDidMount: function() {
      BenchStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
      BenchStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
      if (this.props.bench.id) {
        this.setState({
          bench_id: this.props.bench.id,
          body: "",
          reviewsList: this.reviewsList(this.props.bench.reviews)
        });
      }
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
        <div className="review-section">
          <h1>Reviews</h1>
          {
            reviews.map(function(review) {
              return <div>{review}</div>;
            })
          }
          <form onSubmit={this.createReview} className="review-body">
            <label htmlFor='body'><h2>Write Your Review:</h2></label>
            <textarea valueLink={this.linkState("body")} ref='body' id='body'></textarea>
            <button className="submit-button">Submit Review</button>
            <br/>
            <br/>
          </form>
        </div>
      );
    }

  });

}(this));
