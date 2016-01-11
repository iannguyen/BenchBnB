class Bench < ActiveRecord::Base
  validates :seating, :description, :lat, :lng, presence: true

  has_many :reviews

  def self.in_bounds?(bounds)
    benches = Bench.includes(:reviews).all
    return benches if bounds.nil?
    benches = benches.select do |bench|
      bench.lat.between?(bounds[:south].to_f, bounds[:north].to_f) && bench.lng.between?(bounds[:west].to_f, bounds[:east].to_f)
      end
    benches
  end
end
