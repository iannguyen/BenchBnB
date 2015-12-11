(function(root) {
  'use strict';

  root.BenchForm = React.createClass({
    mixins: [ReactRouter.History],

    getInitialState: function() {
      return {description: '', lat: this.props.location.query.lat, lng: this.props.location.query.lng, seating: ''};
    },

    createBench: function(e) {
      e.preventDefault();
      var bench = {
        lat: e.currentTarget.lat.value,
        lng: e.currentTarget.lng.value,
        seating: e.currentTarget.seating.value,
        description: e.currentTarget.description.value
      };
      ApiUtil.createBench(bench);
    },

    render: function() {
      return (
        <div className="new-bench">
          <h1 className="new-bench-header">Create A New Bench</h1>

          <br/>
          <br/>

          <form className='bench' onSubmit={this.createBench}>

            <div className="latlng">

            <div>
              <label htmlFor='bench_lat'>Latitude:&nbsp;&nbsp;
              <input type="number" ref='lat' id="lat" value={this.state.lat}/>
              </label>
            </div>

            <div>
              <label htmlFor='bench_lng'>Longitude:&nbsp;&nbsp;
              <input type="number" ref='lng' id="lng" value={this.state.lng}/>
              </label>
            </div>
            </div>

            <br/>

            <div>
              <label htmlFor='bench_seating'>Seating:&nbsp;&nbsp;</label>
              <input type="number" ref='seat' id="seating"/>
            </div>

            <br/>

            <div>
              <label htmlFor='bench_description'>Description:</label><br/>
              <textarea ref='description' id='description'></textarea>
            </div>

            <br/>

            <button className="create-button">Create Bench</button>
          </form>
        </div>
      );
    }
  });

}(this));
