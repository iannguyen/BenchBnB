# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

bench1 = Bench.create!({description: "Beautiful bench in Inner Sunset", lat: 37.762275, lng: -122.470999, seating: 3, image_url: "http://res.cloudinary.com/dms46o1eu/image/upload/v1452490089/5687575398_8cdc1f9e15_gepmhd.jpg"})
bench2 = Bench.create!({description: "Ugly bench in T-Loin", lat: 37.783387, lng: -122.417301, seating: 2, image_url: "http://res.cloudinary.com/dms46o1eu/image/upload/v1452489978/3368626387_f2352e9db7_eq95cq.jpg"})
bench3 = Bench.create!({description: "This bench can fit a Full House", lat: 37.775551, lng: -122.432665, seating: 5, image_url: "http://res.cloudinary.com/dms46o1eu/image/upload/v1452490304/_benches-tb36-1e_hdnw4c.jpg"})
bench4 = Bench.create!({description: "This Bench is a little uneven.", lat: 37.784604989723405, lng: -122.45804160833359, seating: 1, image_url: "http://res.cloudinary.com/dms46o1eu/image/upload/v1452490355/benches2_dkxupv.jpg"})
bench5 = Bench.create!({description: "Nice bench near Lombard Street.", lat: 37.8003407281465, lng: -122.41924613714218, seating: 4, image_url: "http://res.cloudinary.com/dms46o1eu/image/upload/v1452490358/furniture-beautiful-garden-with-unusual-modular-curved-teak-park-bench-design-and-white-and-red-flower-decor-unique-wood-bench-designs-for-home_mrzirl.jpg"})
