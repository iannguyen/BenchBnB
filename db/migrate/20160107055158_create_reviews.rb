class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :bench_id, null: false
      t.string :body, null: false
      t.timestamps null: false
    end
  end
end
