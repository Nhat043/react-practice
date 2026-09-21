import { useMemo, useState } from "react";

const products = Array.from({ length: 10000 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
}));

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [count, setCount] = useState(0);

  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");

    return products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery]);

  return (
    <main>
      <h1>useMemo playground</h1>

      <button
        type="button"
        onClick={() => setCount((current) => current + 1)}
      >
        Unrelated count: {count}
      </button>

      <br />
      <br />

      <input
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        placeholder="Search products..."
      />

      <p>Found: {filteredProducts.length}</p>

      <ul>
        {filteredProducts.slice(0, 20).map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </main>
  );
}

export default App;