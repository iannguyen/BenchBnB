class Review < ActiveRecord::Base
  validates :bench_id, :body, :username, presence: :true

  belongs_to :bench
end
