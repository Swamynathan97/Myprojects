import React, { useState } from 'react';

function ProductManagement() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleAddProduct = () => {
        fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, price, quantity })
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response (e.g., display a message or refresh product list)
        });
    };

    return (
        <div>
            <input placeholder="Name" onChange={e => setName(e.target.value)} />
            <input placeholder="Price" onChange={e => setPrice(e.target.value)} />
            <input placeholder="Quantity" onChange={e => setQuantity(e.target.value)} />
            <button onClick={handleAddProduct}>Add Product</button>
        </div>
    );
}
