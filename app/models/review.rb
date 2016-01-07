class Review < ActiveRecord::Base
  validates :bench_id, :body, presence: :true

  belongs_to :bench
end
