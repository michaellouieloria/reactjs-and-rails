class PagesController < ApplicationController
  before_action :authenticate_user!, only: [
    :inside
  ]

  def home
  end

  def about
  end

  def posts
    @posts = Post.published.page(params[:page]).per(10)

    # respond_to do |format|
    #   format.html  # index.html.erb
    #   format.json  { render :json => @posts }
    # end
  end

  def show_post
    @post = Post.friendly.find(params[:id])

  rescue
    redirect_to root_path
  end


  def email
    @name = params[:name]
    @email = params[:email]
    @message = params[:message]

    if @name.blank?
      alert = "Please enter your name before sending your message. Thank you."
    elsif @email.blank? || @email.scan(/\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i).size < 1
      alert = "You must provide a valid email address before sending your message. Thank you."
    elsif @message.blank?
      alert = "Your message is empty. Nothing to send."
    else
      ContactMailer.contact_message(@name,@email,@message).deliver
      alert = nil
    end

    unless alert.nil?
      if request.xhr?
        render :json => { error: alert }, :status => :bad_request
      else
        flash[:alert] = alert
        render :contact
      end
    else
      if request.xhr?
        head :no_content
      else
        redirect_to root_path, notice: "Your message was sent. Thank you."
      end
    end
  end

end
