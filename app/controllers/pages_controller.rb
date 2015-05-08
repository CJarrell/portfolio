class PagesController < ApplicationController
  def home
    @active_page = "home"
  end

  def gallery
    @active_page = "gallery"
  end

  def blog
    @active_page = "blog"
    @posts = Post.all
  end

  def contact
    @active_page = "contact"
  end
end
