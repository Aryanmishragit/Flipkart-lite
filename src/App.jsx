import products from "./data/products";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div>
      <h1>Flipkart Lite</h1>

      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default App;

