# URBN Coding Test

## Description

Recipe Search is an application allows users to easily search for meal ideas across a large collection of websites, with over 1.5 million total recipes.
 

## Instructions for launching application
-git clone https://github.com/tjking20/urbn-coding-test.git

-yarn install 

-yarn start

or visit  https://urbn-coding-test.herokuapp.com/

## Primary Goals

### 1.Build an application that interfaces with a public open api, allowing users to interact with the api and return data. 
-This application uses ReactJS and axios (api call) to access information from the edamam api.

-Users can enter ingredients or specific information to return up to 50 recipes. They can then click on images to visit the recipe source.  


## Bonus Goals

### Api error handling
-Axios calls catch api errors, and display them in the console. 

-If the user enters a search that yields no results, the user will receive a message letting them know. They can then enter another search without reloading the page. 

### Compressed files
-Create react app makes use of automatic compression after running the app. Files are minified and transpiled into browser-friendly es5. 

### CSS supersets (sass/less)
-While building this application I used the css preprocessor sass. I took advantage of nesting and variables while writing my code. 

### Use of a grid system
-While I did not use a grid system in this application, I am experienced in CSS grid layout and Bootstrap grid system.

-Because of the minimalistic layout of this application I chose to use CSS Flexbox for positioning. This makes the application responsive by default. 

### Native JS
- I primarily used ES6 to develop this application, but I did use native es5 javscript in the logo link. 

### Automation
-Create react app automatically transpiles and minifies files, to ensure optimal performance. 

- I also included an additional package that allows the developer to compile sass whenever starting the server or running build for production. 
