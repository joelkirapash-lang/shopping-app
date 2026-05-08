import { useState } from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

export const sampleProducts = [
  { id: 1, name: "Milk", category: "Dairy" },
  { id: 2, name: "Cheese", category: "Dairy" },
  { id: 3, name: "Apple", category: "Fruits" },
  { id: 4, name: "Banana", category: "Fruits" },
  { id: 5, name: "Bread", category: "Bakery" },
  { id: 6, name: "Croissant", category: "Bakery" },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [category, setCategory] = useState("All");

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      if (prev.find((item) => item.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const filteredProducts =
    category === "All"
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === category);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <h1>Grocery Shopping App</h1>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <label htmlFor="category-filter">Filter by Category: </label>
      <select id="category-filter" onChange={handleCategoryChange} value={category}>
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Fruits">Fruits</option>
        <option value="Bakery">Bakery</option>
      </select>
      <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default App;
