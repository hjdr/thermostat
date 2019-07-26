require 'sinatra/base'

class ApplicationManager < Sinatra::Base

  enable :sessions

  get '/' do
    File.read(File.join('public', 'thermostat.html'))
  end

  run! if app_file == $0

end