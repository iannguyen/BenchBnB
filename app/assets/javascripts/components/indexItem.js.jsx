(function(root) {
  'use strict';

  root.IndexItem = React.createClass({
    mixins: [ReactRouter.History],

    show: function(e) {
      e.preventDefault();
      var coords = {
        lat: this.props.bench.lat,
        lng: this.props.bench.lng
      };
      // this.history.pushState(null, "/benches/" + this.props.bench.id, coords);
      this.history.pushState(null, "/benches/" + this.props.bench.id);
    },

    shortenDescription: function(description) {
      if (description.length < 50) {return description;} else {
        return description.slice(0, 50) + "...";
      }
    },

    render: function() {
      return (
        <div className="bench-item" onClick={this.show}>
          <img className="thumbnail" src={this.props.bench.image_url}></img>
          <ul className="index-item">
            <li>{this.shortenDescription(this.props.bench.description)}</li>
            <li>Seating:&nbsp;&nbsp;
              {this.props.bench.seating}</li>
          </ul>
        </div>
      );
    }
  });

}(this));
