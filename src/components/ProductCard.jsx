function ProductCard({ product, onAddToCart }) {
  return (
    <div>
      <p>{product.name}</p>
      <p>{product.category}</p>
      <button
        data-testid={"product-" + product.id}
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
