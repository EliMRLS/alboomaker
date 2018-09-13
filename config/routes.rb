Rails.application.routes.draw do
  root 'static#home'

  post 'send_email', to: 'static#send_email'
  get 'legal', to: 'static#legal'
end
