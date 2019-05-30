class DishesController < ApplicationController
	skip_before_action :verify_authenticity_token
	before_action :get_dish, only: :show

	def home
		@dishes = Dish.paginate(:page => params[:page], :per_page => 6)
		respond_to do |format|
			format.html
			format.js
		end
	end
	
	def search
		@place = Place.find(1)
		searchdish = params[:q]
		@dishes = Dish.where('name LIKE ?', "%#{searchdish}%")
		if params[:filter] == 'price'
			@dishes = Dish.order(params[:filter]).where('name LIKE ?', "%#{searchdish}%")
		elsif params[:filter] == 'rating'
			@dishes = Dish.joins(:ratings).group('ratings.dish_id').order('avg(ratings.rating) desc').where('name LIKE ?', "%#{searchdish}%")
		elsif params[:ratings]
			@dishes = Dish.joins(:ratings).group('ratings.dish_id').having('avg(ratings.rating)> ?',params[:ratings]).where('name LIKE ?', "%#{searchdish}%")
		elsif params[:categoryfilter]
			@dishes = Dish.where(category_id: params[:categoryfilter]).where('name LIKE ?', "%#{searchdish}%")
		elsif params[:min_rangefilter] and params[:max_rangefilter]
			@dishes = Dish.where('price BETWEEN ? AND ?',params[:min_rangefilter],params[:max_rangefilter]).where('name LIKE ?', "%#{searchdish}%")
		end
		respond_to do |format|
    	format.html
    	format.js
    end
	end
	 
	def show
	end

	private
		def get_dish
			@dish = Dish.find(params[:id])
		end
end