# Chef's Table 🍽️

**Chef's Table** is a recipe-based web application designed to inspire home cooks and food enthusiasts by providing a variety of delicious recipes with detailed ingredients, preparation time, and calorie information. Users can browse through recipes, select their favorites, and keep track of what they want to cook and are currently preparing.

## Table of Contents

- [Features](https://www.notion.so/129caef80c61808690a9fd782dba13df?pvs=21)
- [Technologies Used](https://www.notion.so/129caef80c61808690a9fd782dba13df?pvs=21)
- [Usage](https://www.notion.so/129caef80c61808690a9fd782dba13df?pvs=21)
- Project structure
- [License](https://www.notion.so/129caef80c61808690a9fd782dba13df?pvs=21)

## Features

- 🍲 **Recipe Listing**: Browse through a variety of recipes with detailed descriptions, ingredients, preparation time, and calorie count.
- ⭐ **Want to Cook List**: Add your favorite recipes to a "Want to Cook" list for easy tracking.
- 🥘 **Currently Cooking**: Mark recipes you are currently preparing, and view total time and calories.
- 🔄 **Persistent Storage**: The application remembers your selected recipes using local storage.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.
- **LocalStorage API**: To persist user data across sessions.
- **Unsplash API** (for image placeholders): Displaying recipe images.
- **JavaScript (ES6+)**: Core language features such as `map`, `filter`, and `find` etc...

## Usage

1. Browse through the recipes listed on the home page.
2. Add recipes to your "Want to Cook" list by clicking the **"Want to Cook"** button.
3. Start cooking a recipe by clicking the **"Preparing"** button and track your total cooking time and calories.
4. Your progress will be saved across sessions using local storage.

## Project Structure

```bash

├── public
│   └── index.html       # Main HTML file
├── src
│   ├── components
│   │   ├── Recipe.js    # Component for displaying individual recipes
│   │   ├── Recipes.js   # Main component to list all recipes
│   ├── assets           # Static assets (images, icons, etc.)
│   ├── styles           # Tailwind CSS configuration
│   ├── App.js           # Main App component
│   └── index.js         # Entry point of the app
└── package.json         # Project dependencies and scripts

```

## License

This project is licensed under “samadsust71@gmail.com”.

## Live Link

https://chefstable007.netlify.app
