Rails.application.routes.draw do
  devise_for :players
  resources :games
  root 'games#index'
  resources :boxes
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
