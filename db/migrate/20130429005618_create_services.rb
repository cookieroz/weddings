class CreateServices < ActiveRecord::Migration
  def change
    create_table :services do |t|
      t.string :name
      t.string :slug
      t.text :content

      t.timestamps

    end
    add_index :services, :slug, unique: true
  end
end
