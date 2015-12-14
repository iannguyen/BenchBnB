(function(root) {
  'use strict';

  root.Index = React.createClass({

    render: function() {
      return (
        <div className='bench-index'>
          <Filters/>
          <ul>
            {this.props.benches.map(function(bench) {
              return (
                <div>
                  <IndexItem key={bench.id} bench={bench}/>
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
