class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def send_email
    redirect_to(:home, alert: "Todos los campos son obligatorios") and return if params[:contact].map{ |k, v| v.blank? }.any?
    redirect_to(:home, alert: "El campo email no es correcto") and return unless params[:contact].values[2] = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
    ApplicationMailer.delay.send_email params[:contact]
    redirect_to :home, notice: "Email enviado correctamente"
  end

end
