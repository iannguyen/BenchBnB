class Review < ActiveRecord::Base
  validates :username, length: {maximum: 30}
  validates :body, length: {maximum: 400}
  validates :bench_id, :body, :username, presence: :true

  belongs_to :bench
end
