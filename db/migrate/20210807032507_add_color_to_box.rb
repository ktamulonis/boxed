class AddColorToBox < ActiveRecord::Migration[6.1]
  def change
    add_column :boxes, :color, :string
  end
end
