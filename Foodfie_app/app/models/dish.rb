class Dish < ApplicationRecord
	belongs_to :category 
	has_many :ratings
	has_many :images, as: :imageable
	has_and_belongs_to_many :restaurants 
	validates_presence_of :name,:price,:category_id,:description
end
