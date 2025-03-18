const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Dummy Data (Temporary Storage)
const recipes = {
  Italian: [
    {
      name: "Margherita Pizza",
      ingredients: "Flour, Tomato Sauce, Mozzarella Cheese, Basil",
      image: "https://images.unsplash.com/photo-1600028068383-ea11a7a101f3",
    },
    {
      name: "Pasta Carbonara",
      ingredients: "Pasta, Eggs, Parmesan, Bacon, Pepper",
      image: "https://images.unsplash.com/photo-1574969903809-3f7a1668ceb0",
    },
    {
      name: "Tiramisu",
      ingredients: "Mascarpone, Coffee, Ladyfingers, Cocoa",
      image: "https://images.unsplash.com/photo-1639744211487-b27e3551b07c",
    },
  ],
  Indian: [
    {
      name: "Butter Chicken",
      ingredients: "Chicken, Butter, Tomato, Cream, Spices",
      image: "https://media.istockphoto.com/id/1461543694/photo/close-up-view-of-a-bowl-of-chicken-butter-masala.jpg",
    },
    {
      name: "Paneer Tikka",
      ingredients: "Paneer, Yogurt, Spices, Onion, Capsicum",
      image: "https://media.istockphoto.com/id/1363305308/photo/paneer-tikka.jpg",
    },
    {
      name: "Gulab Jamun",
      ingredients: "Khoya, Sugar Syrup, Cardamom, Rose Water",
      image: "https://images.unsplash.com/photo-1596560548464-b724cb1ff671",
    },
  ],
  Mexican: [
    {
      name: "Tacos",
      ingredients: "Tortilla, Meat, Cheese, Salsa, Lettuce",
      image: "https://images.unsplash.com/photo-1600788903515-2d3fc2765a35",
    },
    {
      name: "Quesadilla",
      ingredients: "Tortilla, Cheese, Chicken, Vegetables",
      image: "https://images.unsplash.com/photo-1584466977773-262aa3efb8f9",
    },
    {
      name: "Churros",
      ingredients: "Flour, Cinnamon, Sugar, Chocolate Sauce",
      image: "https://images.unsplash.com/photo-1562967914-608f8262976d",
    },
  ],
};

// API to get recipes
app.get("/api/recipes", (req, res) => {
  res.json(recipes);
});

// API to add a new recipe
app.post("/api/add-recipe", (req, res) => {
  const { cuisine, name, ingredients, image } = req.body;

  if (!cuisine || !name || !ingredients || !image) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (!recipes[cuisine]) {
    recipes[cuisine] = [];
  }

  const newRecipe = { name, ingredients, image };
  recipes[cuisine].push(newRecipe);

  res.json({ message: "Recipe added successfully!", recipes });
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
