class AddOpponentIdToBox < ActiveRecord::Migration[6.1]
  def change
    add_column :boxes, :opponent_id, :integer
  end
end
