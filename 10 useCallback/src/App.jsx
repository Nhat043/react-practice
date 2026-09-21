import { memo, useCallback, useState } from "react";

const ProductList = memo(function ProductList({ onSelect }) {
  console.log("ProductList rendered");

  return (
    <section>
      <h2>Product List</h2>

      <button type="button" onClick={() => onSelect("p-1")}>
        Select Laptop
      </button>
    </section>
  );
});

function App() {
  const [count, setCount] = useState(0);

  const handleSelect = useCallback((productId) => {
    console.log("Selected:", productId);
  }, []);

  return (
    <main>
      <h1>useCallback playground</h1>

      <button
        type="button"
        onClick={() => setCount((current) => current + 1)}
      >
        Unrelated count: {count}
      </button>

      <ProductList onSelect={handleSelect} />
    </main>
  );
}

export default App;