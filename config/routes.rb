Rails.application.routes.draw do
  root "static_pages#root"
  namespace :api, defaults: { format: :json } do
    resources :benches, only: [:new, :create, :index, :show]
    resources :reviews, only: [:new, :create, :index, :show]
  end
end
