class StaticController < ApplicationController
  def home
    @products = Product.all
  end

  def send_email
    redirect_to(:root, alert: "Todos los campos son obligatorios") and return if params[:contact].map{ |k, v| v.blank? }.any?
    redirect_to(:root, alert: "El campo email no es correcto") and return unless params[:contact].values[2] = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
    ApplicationMailer.delay.send_email params[:contact]
    redirect_to :root, notice: "Email enviado correctamente"
  end

end
