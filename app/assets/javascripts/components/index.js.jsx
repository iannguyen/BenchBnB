(function(root) {
  'use strict';

  root.Index = React.createClass({

    render: function() {
      return (
        <div className='description'>
          <ul>
            {this.props.benches.map(function(bench) {
              return (
                <div>
                  <li>-{bench.description}-</li>
                </div>
              );
            })
          }
          </ul>
        </div>
      );
    }
  });

}(this));
