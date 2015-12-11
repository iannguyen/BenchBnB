(function(root) {
  'use strict';

  root.Index = React.createClass({

    render: function() {
      return (
        <div className='bench-index'>
          <ul>
            {this.props.benches.map(function(bench) {
              return (
                <div>
                  <li key={bench.id}>-{bench.description}</li>
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
