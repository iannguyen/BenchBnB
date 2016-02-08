# [BenchBnB][site]

[Live][site]
[site]: http://bench-bnb-in.herokuapp.com/

![screenshot]
[screenshot]: http://res.cloudinary.com/dms46o1eu/image/upload/c_scale,w_750/v1451967741/bench_bnb_pdccks.gif

BenchBnB is a project that integrates the GoogleMaps API. It is inspired by AirBnB.

### Features

- Single page web-application, built on `Rails`, `React.js/FLUX`, `ReactRouter`, and the `GoogleMaps` API.
- Click on the map to create a new `Bench` at the specified `coordinates`.
- Moving the map causes the viewable `boundaries` to change. Bench markers along with their respective information will be not be displayed if they are out of the map's current visible boundaries.
- `Filter` by `min` and `max` seating to display benches with seating capacities within the by specified restrictions.

### Code Spotlight

##### Filtering

![search]
[search]: ./images/search.png

- When the main component is mounted, it adds a listener for changes in the `BenchStore`, which includes benches, and filters

![boundaries]
[boundaries]: ./images/boundaries.png

- By default, the `bench` model in Rails, only fetches benches in the viewable boundaries of the map whenever the map boundaries physically change by the user

![filter_store]
[filter_store]: ./images/filter_store.png

- The `BenchStore` receives the benches, and sets the default filters.

![dispatcher]
[dispatcher]: ./images/dispatcher.png

- When new `benches` are received, a change alert is dispatched by the `Dispatcher`, signifying to all component listeners that the store has changed.

![filters]
[filters]: ./images/filters.png

- The filters component has 2 change handlers, one of the `min` and `max`. When the user clicks on a new filter, it sends the `FilterActions.updateFilters` action, which updates the filters in the BenchStore and returns the filtered benches with the new filter parameters. All of this is done without fetching new data through an ajax request.
- The `filters` also persist when changing the map boundaries, and only reset when the component is remounted.

### ToDo

- [x] Bring it to life
- [x] Apply `filters` for bench seating capacity
- [x] Add a `Bench` show page and integrate image upload
- [x] Add `Reviews` for benches
- [ ] Add `Rating Stars` for reviews
