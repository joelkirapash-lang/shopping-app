import ProductCard from "./ProductCard";

function ProductList({ products, onAddToCart }) {
  if (!products || products.length === 0) {
    return <p>No products available</p>;
  }
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

export default ProductList;
