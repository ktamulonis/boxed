Rails.application.routes.draw do
  root 'boxes#index'
  resources :boxes
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end