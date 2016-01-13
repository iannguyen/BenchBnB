(function(root) {
  'use strict';

  root.ReviewsIndex = React.createClass({
    mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

    defaultAttributes: {
      bench_id: "",
      username: "",
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
          username: "",
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
        username: this.state.username,
        body: this.state.body
      };
      ApiUtil.createReview(bench);
    },

    render: function() {
      var reviews = this.state.reviewsList;
      return(
        <div className="review-section">
          <h1>Reviews</h1>
          <br/>
          {
            reviews.map(function(review) {
              return <ReviewItem review={review}/>;
            })
          }
          <form onSubmit={this.createReview} className="review-body">
            <br/>
            <h2>Write Your Review</h2>
            <label htmlFor='username'></label>
            <textarea type='text' name='username' id='username' ref='username' maxlength="20" valueLink={this.linkState('username')} placeholder="Your name..."></textarea>
            <label htmlFor='body'></label>
            <textarea valueLink={this.linkState("body")} ref='body' id='body' placeholder="What do you think about this bench?"></textarea>
            <button className="submit-button">Submit Review</button>
            <br/>
            <br/>
          </form>
        </div>
      );
    }

  });

}(this));
