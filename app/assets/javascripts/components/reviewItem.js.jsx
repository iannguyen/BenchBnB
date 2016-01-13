(function(root) {
  'use strict';

  root.ReviewItem = React.createClass({

    render: function() {
      if (this.props.review.body) {
        return(
          <div className="review-item">
            <p className="timeago">{jQuery.timeago(this.props.review.created_at)}</p>
            <h3 className="review-username">{this.props.review.username + " :"}</h3>
            <p className="review-body">&nbsp;&nbsp;{this.props.review.body}</p>
            <br/>
          </div>
        );
      } else {
        return(
          <div className="review-item">
            <p>&nbsp;{this.props.review}</p>
          </div>
        );
      }
    }

  });

}(this));
