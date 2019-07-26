require 'sinatra/base'

class ApplicationManager < Sinatra::Base

  configure do
    set :public_folder, File.dirname(__FILE__) + '/'
  end

  get '/temperature' do
    File.read('public/thermostat.html')
  end

  post '/temperature' do

  end

  run! if app_file == $0

end