# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

bench1 = Bench.create!({description: "Beautiful bench in Inner Sunset", lat: 37.762275, lng: -122.470999, seating: 3, image_url: "https://s-media-cache-ak0.pinimg.com/236x/31/1d/19/311d19667b2d4439a08692edf87389b4.jpg"})
bench2 = Bench.create!({description: "Ugly bench in T-Loin", lat: 37.783387, lng: -122.417301, seating: 2, image_url: "http://thumbs.dreamstime.com/t/park-bench-empty-dirty-51491869.jpg"})
bench3 = Bench.create!({description: "This bench can fit a Full House", lat: 37.775551, lng: -122.432665, seating: 5, image_url: "http://www.benches.co.uk/shop/_benches-tb36-1e.jpg"})
bench4 = Bench.create!({description: "This Bench is a little uneven.", lat: 37.784604989723405, lng: -122.45804160833359, seating: 1, image_url: "http://www.toxel.com/wp-content/uploads/2008/09/benches2.jpg"})
bench5 = Bench.create!({description: "Nice bench near Lombard Street.", lat: 37.8003407281465, lng: -122.41924613714218, seating: 4, image_url: "http://www.examsuites.com/wp-content/uploads/2014/08/furniture-beautiful-garden-with-unusual-modular-curved-teak-park-bench-design-and-white-and-red-flower-decor-unique-wood-bench-designs-for-home.jpg"})
