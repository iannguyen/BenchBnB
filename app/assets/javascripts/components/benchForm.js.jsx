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
                <label htmlFor='bench_lat'>Latitude:</label>&nbsp;&nbsp;
                <input type="number" ref='lat' id="lat" value={this.state.lat}/>
              </div>

              <div>
                <label htmlFor='bench_lng'>Longitude:</label>&nbsp;&nbsp;
                <input type="number" ref='lng' id="lng" value={this.state.lng}/>
              </div>
            </div>

            <br/>

            <div>
              <label htmlFor='bench_seating'>Seating (required):</label>&nbsp;&nbsp;
              <select id="seating" name="seating">
                <option selected disabled hidden value=''></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <br/>

            <div>
              <label htmlFor='bench_description'>Description (required):</label><br/><br/>
              <textarea ref='description' id='description'></textarea>
            </div>

            <br/>

            <div>
              <label htmlFor='bench_imageurl'>Image URL(optional):</label><br/><br/>
              <textarea ref='url' id='url'></textarea>
            </div>

            <br/>
            <br/>

            <button className="create-button">Create Bench</button>
          </form>
        </div>
      );
    }
  });

}(this));
