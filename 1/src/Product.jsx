import { useState } from "react";

const Products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Tablet" },
    { id: 4, name: "Monitor" },
    { id: 5, name: "Keyboard" },
    { id: 6, name: "Mouse" },

];

function ProductList({ name = "" }) {
    const filteredProducts = Products.filter(product => product.name.toLowerCase().includes(name.toLowerCase()));
    console.log("ProductList rendered with name:", name);
    if (filteredProducts.length === 0) {
        return <p>No products found.</p>;
    }
    return (
        <ul>
            {filteredProducts.map(product => (
                <li key={product.id}>{product.name}</li>
            ))}
        </ul>
    );
}

function SearchProductBar({ value, onChange }) {
    return (
        <input
            type="text"
            placeholder="Search product..."
            value={value}
            onChange={onChange}
        />
    );
}

function AddProduct({ onAdd }) {
    const [productName, setProductName] = useState("");

    function handleAdd() {
        if (productName.trim() !== "") {
            onAdd(productName);
            setProductName("");
        }
    }

    return (
        <div>
            <input
                type="text"
                placeholder="New product name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
            />
            <button onClick={handleAdd}>Add Product</button>
        </div>
    );
}


export { ProductList, SearchProductBar };