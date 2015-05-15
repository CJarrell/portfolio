class PostsController < ApplicationController
  def index
  end

  def new
  end

  def create
    @post = Post.new(post_params)
    @post.save

    redirect_to @post
  end

  def show
    @post = Post.find(params[:id])
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy

    redirect_to admin_path
  end

  private
    def post_params
      params.require(:post).permit(:title, :body)
    end

end
