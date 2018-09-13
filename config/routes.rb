Rails.application.routes.draw do
  root 'static#home'

  post 'send_email', to: 'application#send_email'
end
