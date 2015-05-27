class PagesController < ApplicationController
  def home
    @active_page = "home"
  end

  def gallery
    @active_page = "gallery"
    @projects = Project.all
  end

  def blog
    @active_page = "blog"
    @posts = Post.all.order('created_at Desc')
  end

  def contact
    @active_page = "contact"
  end

  def admin
    @active_page = "admin"
    @posts = Post.all.order('created_at Desc')
  end
end
