# BenchBnB

[Live][site]
[site]: http://bench-bnb.herokuapp.com/

![screenshot]
[screenshot]: ./images/bench_bnb.png

BenchBnB is a project that integrates the GoogleMaps API. Inspired by AirBnB.

### Features

- Single page web-application, built on `Rails`, `React/FLUX`, and `ReactRouter`.
- Click on the map to create a new `Bench` at the specified `coordinates`.
- Moving the map causes the viewable `boundaries` to change. Bench markers along with their respective information will be not be displayed if they are out of the map's current visible boundaries.
- `Filter` by `min` and `max` seating to display benches with seating capacities within the by specified restrictions.

### ToDo

- [x] Bring it to life
- [x] Apply `filters` for bench seating capacity
- [x] Add a `Bench` show page and integrate image upload
- Add `Reviews` for benches
