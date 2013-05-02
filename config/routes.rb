Weddings::Application.routes.draw do
  resources :services

  mount Ckeditor::Engine => '/ckeditor'

  match '/about',   to: 'static_pages#about'
  match '/contact', to: 'static_pages#contact'
  get 'after', to: 'static_pages#after', as: 'after'
  get 'before', to: 'static_pages#before', as: 'before'
  get 'weddings', to: 'static_pages#weddings', as: 'weddings'

  root :to => 'static_pages#home'
end
