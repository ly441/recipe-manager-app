
#Recipe App

---

##  Overview
The Recipe App allows users to:
- View, search, add, update, and delete recipes.
- Communicate with a `db.json` server for dynamic recipe management.

  ##google docs
  https://docs.google.com/presentation/d/19I5yR-UDxjCC-TrnjBFbcv9LVWsDaGwT2Raw8jiagJo/edit?slide=id.g343ecf8305b_0_702#slide=id.g343ecf8305b_0_702

---

##  Features
-  **View Recipes** - Fetches and displays recipes from the server.
-  **Search Recipes** - Search for recipes by name.
- **Add Recipes** - Create new recipes with title, ingredients, and instructions.
-  **Edit Recipes** - Modify specific fields of a recipe.
- **Delete Recipes** - Remove unwanted recipes from the database.

---

##  Technologies Used
- **HTML** - Structures the webpage.
- **CSS** - Styles the user interface.
- **JavaScript (ES6)** - Manages dynamic updates and API communication.
- **JSON Server** - Simulates a backend for data storage.

---

##  Project Structure
```
/recipe-app  
 ├── index.html  # Main webpage
 ├── styles.css  # CSS styling
 ├── script.js   # JavaScript logic
 ├── db.json     # Fake API database
```

---

## Setup Instructions
### Clone the repository
```sh
git clone <your-repo-url>
```

###  Navigate to the project folder
```sh
cd recipe-app
```

###  Install JSON Server
```sh
npm install -g json-server
```

###  Start the JSON Server
```sh
json-server --watch db.json --port 4000
```

###  Run the project
- Open `index.html` in a browser.
- Or use the Live Server extension in VS Code.

---

## API Endpoints
| Method  | Endpoint           | Description               |
|---------|------------------|---------------------------|
| **GET**    | `/recipes`       | Fetch all recipes        |
| **POST**   | `/recipes`       | Add a new recipe         |
| **PATCH**  | `/recipes/:id`   | Update a specific recipe |
| **DELETE** | `/recipes/:id`   | Remove a recipe         |

---

##  Example Recipe Object
```json
{
  "id": 1,
  "title": "Spaghetti Bolognese",
  "ingredients": "Pasta, Tomato Sauce, Meat",
  "instructions": "Cook pasta, add sauce, mix with meat."
}
```

---

## How to Use
### 🔹 Viewing Recipes
- Recipes will automatically load from the server.

### 🔹 Searching Recipes
- Type a keyword in the search bar to filter recipes.

### 🔹 Adding a Recipe
- Fill out the form and click **Submit** to add a new recipe.

### 🔹 Editing a Recipe
- Click the **Edit** button to update a recipe’s details.

### 🔹 Deleting a Recipe
- Click the **Delete** button to remove a recipe from the server.

---

##  Notes
✅ Ensure `json-server` is running before using the app.
✅ This app is designed for **local use** but can be modified for real backend integration.

---

##  Credits
Developed by **Lynn Kolii** 

