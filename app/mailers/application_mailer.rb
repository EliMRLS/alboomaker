class ApplicationMailer < ActionMailer::Base
  default from: 'tech@printoria.es'
  layout 'mailer'

  def send_email(email_params)
    @message = email_params[:message]
    @sender_name = email_params[:sender_name]
    mail(to: default_to("tech@printoria.es"),
         subject: "Atención al cliente",
         reply_to: email_params[:sender_email])
  end

end
