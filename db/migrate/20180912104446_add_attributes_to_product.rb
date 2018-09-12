class AddAttributesToProduct < ActiveRecord::Migration[5.0]
  def change
    add_column :products, :name, :string
    add_column :products, :code, :string
    add_column :products, :category, :string
    add_column :products, :fixed_cost, :float
    add_column :products, :cost, :float
    add_column :products, :width, :float
    add_column :products, :height, :float
    add_column :products, :weight, :float
    add_column :products, :bleed, :float
    add_column :products, :price, :float
    add_column :products, :online_url, :string
  end
end
