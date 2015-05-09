require 'test_helper'

class AdminControllerTest < ActionController::TestCase
  test "should get new-post" do
    get :new-post
    assert_response :success
  end

  test "should get new-file" do
    get :new-file
    assert_response :success
  end

end
