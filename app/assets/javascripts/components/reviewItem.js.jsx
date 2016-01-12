(function(root) {
  'use strict';

  root.ReviewItem = React.createClass({

    render: function() {
      return(
        <div className="review-item">
          <p className="timeago">{jQuery.timeago(this.props.review.created_at)}</p>
          <p className="review-body">&nbsp;&nbsp;{this.props.review.body}</p>
          <br/>
        </div>
      );
    }

  });

}(this));
