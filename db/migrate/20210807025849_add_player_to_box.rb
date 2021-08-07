class AddPlayerToBox < ActiveRecord::Migration[6.1]
  def change
    add_reference :boxes, :player, null: false, foreign_key: true
  end
end
