source 'https://rubygems.org'
ruby '2.1.2'

gem 'rails', '4.1.4'


gem 'sass-rails', '>= 3.2'
gem 'uglifier', '>= 1.3.0'
gem 'jquery-rails'
gem 'jbuilder', '~> 2.0'
gem 'spring', group: :development
gem 'angularjs-rails'
gem 'bower-rails', '~> 0.8.3'
gem 'angular-rails-templates'
gem 'autoprefixer-rails'
gem 'bootstrap-sass', '~> 3.3.1'
gem 'haml'
gem "haml-rails"

gem 'bourbon'

# Customerio

gem 'customerio', :git => 'https://github.com/customerio/customerio-ruby'

# Figaro
gem 'figaro'

# Rails integration for AngularJS style CSRF protection
gem 'angular_rails_csrf'

# Token based authentication for Rails JSON APIs
# gem 'devise_token_auth'

# Modified Gem
gem 'devise_token_auth', git: 'https://github.com/jasonswett/devise_token_auth.git'

# Omniauth
gem 'omniauth', '~> 1.2.2'

#Serialize to json
gem 'serialize-rails'

gem 'nokogiri'
gem 'premailer-rails'

gem 'yaml_db'

# Use rack-rewrite to allow use of HTML5 pushState.
gem 'rack-rewrite'

group :production do
  gem 'rails_12factor'
  gem 'pg'
end

group :development do
  gem 'mysql2'
  gem 'pry'
  gem 'pry-byebug'
  gem 'letter_opener_web', '~> 1.2.0'
end

group :assets do
  gem 'coffee-rails'
end

group :development, :test do
  gem 'rspec-rails', '~> 3.0'
  gem 'factory_girl_rails', require: false
  gem 'capybara'
  gem 'selenium-webdriver'
  gem 'database_cleaner'
  gem 'compass'
  gem 'faker'
end
