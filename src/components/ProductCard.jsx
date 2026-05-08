function ProductCard({ product, onAddToCart }) {
  return (
    <div>
      <p>{product.name}</p>
      <p>{product.category}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
