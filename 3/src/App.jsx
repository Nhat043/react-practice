import { useState, useEffect } from 'react';


import ProductList, { CreateProduct } from "./ProductList";

export default function App() {
  const initialProducts = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];

  const [products, setProducts] = useState(initialProducts);

  function handleCreateProduct(event) {
    event.preventDefault();
    const newProduct = {
      id: crypto.randomUUID(),
      name: event.target.name.value,
      price: parseFloat(event.target.price.value),
    };

    setProducts((prevProducts) => [...prevProducts, newProduct]);
  }

  function handleDeleteProduct(productId) {
    setProducts((previousProducts) =>
      previousProducts.filter((product) => product.id !== productId)
    );
  }

  function handleUpdateProduct(productId, updatedProduct) {
    setProducts((previousProducts) =>
      previousProducts.map((product) =>
        product.id === productId ? { ...product, ...updatedProduct } : product
      )
    );
  }

  useEffect(() => {
    console.log('Products updated:', products);
  }, [products]);

  return (
    <main>
      <h1>Product Creation</h1>
      <CreateProduct onCreate={handleCreateProduct} />
      <hr />
      <h1>Product List</h1>
      <ProductList products={products} onUpdate={handleUpdateProduct} onDelete={handleDeleteProduct} />
    </main>
  );
}