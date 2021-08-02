class AddGameToBox < ActiveRecord::Migration[6.1]
  def change
    add_reference :boxes, :game, null: false, foreign_key: true
  end
end
