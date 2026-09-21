

export default function ProductList({ products, onUpdate, onDelete }) {


    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price.toFixed(2)}

                        <button onClick={() => {
                            const newName = prompt('Enter new product name:', product.name);
                            const newPrice = prompt('Enter new product price:', product.price);

                            if (newName !== null && newPrice !== null) {
                                onUpdate(product.id, { name: newName, price: parseFloat(newPrice) });
                            }
                        }}>Update</button>

                        <button onClick={() => {
                            const confirmed = window.confirm(`Are you sure you want to delete ${product.name}?`);
                            if (confirmed) {
                                // Call the onDelete function passed from the parent component
                                onDelete(product.id);
                            }
                        }}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export function CreateProduct({ onCreate }) {



    return (
        <div>
            <h2>Create Product</h2>
            <form onSubmit={(e) => {
                onCreate(e);
            }}>
                <input type="text" name="name" placeholder="Product Name" required />
                <input type="number" name="price" placeholder="Product Price" required />
                <button type="submit" >Create</button>
            </form>
        </div>
    )
}