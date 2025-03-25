Recipe App

 Overview

The Recipe App allows users to view, search, add, update, and delete recipes using a simple and interactive interface. It communicates with a db.json server to manage recipes dynamically.

 Features

View a list of recipes fetched from the server

Search for recipes by name

Add new recipes with a title, ingredients, and instructions

Edit existing recipes using PATCH requests

Delete unwanted recipes from the database

 Technologies Used

HTML - Structure the webpage

CSS - Styling for a visually appealing design

JavaScript (ES6) - Handles dynamic updates and API communication

JSON Server - Simulates a backend for data storage

Project Structure

/recipe-app  
 ├── index.html  # Main webpage
 ├── styles.css  # CSS styling
 ├── script.js   # JavaScript logic
 ├── db.json     # Fake API database

 Setup Instructions

Clone the repository:

git clone <your-repo-url>

Navigate to the project folder:

cd recipe-app

Install JSON Server globally if you haven't already:

npm install -g json-server

Start the JSON Server:

json-server --watch db.json --port 4000

Open index.html in a browser or use Live Server extension in VS Code.

 API Endpoints

Method

Endpoint

Description

GET

/recipes

Fetch all recipes

POST

/recipes

Add a new recipe

PATCH

/recipes/:id

Update a specific recipe

DELETE

/recipes/:id

Delete a recipe

 Example Recipe Object

{
  "id": 1,
  "title": "Spaghetti Bolognese",
  "ingredients": "Pasta, Tomato Sauce, Meat",
  "instructions": "Cook pasta, add sauce, mix with meat."
}

How to Use

View Recipes - Recipes will automatically load from the server.

Search Recipes - Use the search bar to filter recipes.

Add a Recipe - Fill out the form and click submit to add a recipe.

Edit a Recipe - Click the edit button to update a recipe.

Delete a Recipe - Click the delete button to remove a recipe.

 Notes

Make sure json-server is running before interacting with the app.

The app is designed for local use but can be adapted for real backend integration.

Credits

Developed by Lynn Kolii 

