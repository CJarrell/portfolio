class Project

  def Project.all
    client = Behance::Client.new(access_token: "EyNy4STT52F3iOYpOenUE6HzEiNFaVlk")
    client.user_projects("TimeTravelingTiger")
  end

end
