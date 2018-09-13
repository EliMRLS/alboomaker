require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Alboomaker
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    config.active_job.queue_adapter = :delayed_job

    # Email
    config.action_mailer.preview_path = "#{Rails.root}/test/mailers/previews"
    # config.action_mailer.asset_host = "http://dsh366p00cka1.cloudfront.net"
    config.action_mailer.default_url_options = { :host => 'www.alboomaker.com' }
    config.action_mailer.delivery_method = :smtp
    config.action_mailer.perform_deliveries = true
    config.action_mailer.raise_delivery_errors = true
    config.action_mailer.default :charset => "utf-8"
    config.action_mailer.smtp_settings = {
      address: "smtp.mandrillapp.com",
      port: 587,
      user_name: "info@printoria.es",
      password: Rails.application.secrets.smtp_password
    }
  end
end
