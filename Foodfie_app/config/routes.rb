Rails.application.routes.draw do
  resources :places
  resources :widgets
  root to:'dishes#home'
  # post 'dishes/seemore', to: 'dishes#seemore', as:'seemore'
  post 'dishes/search', to: 'dishes#search', as:'search_result'
  # post 'dishes/sort', to: 'dishes#sort', as: 'sort_dishes'
  get 'dishes/:id', to:'dishes#show', as: 'dish'
end
