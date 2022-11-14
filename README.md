# ICON TECH SHOP
React & Ruby Project

# THE ICONS
* Hafsa Nuh ➪ scrum master
* Beulah Mathenge ➪ backend developer
* Dennis Muturi ➪ frontend developer

# Project Presentation
https://docs.google.com/presentation/d/1WhDjEp9l3l6LUlNj-c7CZr1zMDt_dRZDOxHSxbPTfbE/edit#slide=id.g70c71c87bd_0_763 

## SETUP
to access  this project on your local files, you can clone it using this steps

```bash
 Open the Terminal

Clone the repository:git@github.com:hafsa-nuh/interior-design-studio.git

Change Directory: cd interior-design-studio

npm install
if u get an error when running npm start ,then run
nvm install --lts
open browser by running npm start
```

# The Idea
It's a user-friendly E-commerce site that touches on almost every prior topics covered throughout the course.

# Webiste Screenshot
### Landing Page
![Website Screenshot](https://github.com/hafsa-nuh/E-Commerce-/blob/main/src/assets/Screenshot%202022-11-14%20at%2010.43.46.jpg?raw=true)

### Products Page
![Website Screenshot](https://github.com/hafsa-nuh/E-Commerce-/blob/main/src/assets/Screenshot%202022-11-14%20at%2010.47.59.jpg?raw=true)

### Product Details Page
![Website Screenshot](https://github.com/hafsa-nuh/E-Commerce-/blob/main/src/assets/Screenshot%202022-11-14%20at%2010.54.48.jpg?raw=true)

### Registration Page
![Website Screenshot](https://github.com/hafsa-nuh/E-Commerce-/blob/main/src/assets/Screenshot%202022-11-14%20at%2010.48.15.jpg?raw=true)

### Add Cart Page
![Website Screenshot](https://github.com/hafsa-nuh/E-Commerce-/blob/main/src/assets/Screenshot%202022-11-14%20at%2010.44.18.jpg?raw=true)


# Technologies Used
* JSX
* CSS
* Styled Components
* Slider JS
* Switch transition
* React
* Ruby

## Sinatra API backend
to create a Sinatra API start with bundle install then if u have data in seed.rb , then run the server.
```bash
bundle install
bundle exec rake db:migrate db:seed
bundle exec rake server
```


# How to deploy apps for free
Deploying single react applications using Heroku and Vercel


## To install Postgres
For this Project, we first had to install Postgres SQL as the database supported by our hosting service provider, Heroku.
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql.service
sudo -i -u postgres
createdb databaseName
sudo -i -u databaseName psql
```
set postgress as default db in your sinatra project by replacing the sqlite configuration development:
```bash
adapter: postgresql
encoding: unicode
database: database_name
pool: 2
username: your_username
password: your_password
production:
adapter: postgresql
encoding: unicode
pool: 5
host: <%= ENV['DATABASE_HOST'] %>
database: <%= ENV['DATABASE_NAME'] %>
username: <%= ENV['DATABASE_USER'] %>
password: <%= ENV['DATABASE_PASSWORD'] %>with this:
```
Also added the postgres gem
```bash
gem "pg"
```


## Single React App on Heroku
1) Create a Heroku account/Log in using Heroku login.
2) Create your app.
3) Download Heroku CLI from [here](https://devcenter.heroku.com/articles/heroku-cli#download-and-install).
4) Run these codes.

```bash
heroku login
git init
git add .
git commit -am "my first commit"
git push heroku main
heroku rake db:migrate db:seed
heroku open
```

## Single React App on Vercel
1) Create a Vercel account.
2) Linking GitHub
3) Continue with GitHub
4) Add GitHub Repo
5) Choose the repo to deploy
6) Diploy


## LIVE SITE

http://e-commerce-bay.vercel.app/

## LICENSE

This project is under the [MIT](License) license