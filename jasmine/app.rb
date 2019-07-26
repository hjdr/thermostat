require 'sinatra/base'

class ApplicationManager < Sinatra::Base

  $temp = '23'

  configure do
    enable :sessions
    set :public_folder, File.dirname(__FILE__) + '/'
  end

  get '/temperature' do
    File.read('public/thermostat.html')
  end

  get '/temperature/get-temp' do
    session[:temp] = $temp 
  end

  post '/temperature/post-temp' do
    session[:temp] = params
  end

  run! if app_file == $0

end