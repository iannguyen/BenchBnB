json.array!(@benches) do |bench|
  json.extract!(
    bench,
    :id, :lat, :lng, :seating, :description, :image_url
  )
  json.reviews(bench.reviews)
end
