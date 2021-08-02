class AddNameToPlayer < ActiveRecord::Migration[6.1]
  def change
    add_column :players, :name, :string
  end
end
