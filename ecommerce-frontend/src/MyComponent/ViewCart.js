import React, { useState, useEffect } from 'react';

function ViewCart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/cart')
        .then(response => response.json())
        .then(data => {
            setCartItems(data);
        });
    }, []);

    return (
        <div>
            {cartItems.map(item => (
                <div key={item.productId}>
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                    <span>{item.quantity}</span>
                    <span>{item.price * item.quantity}</span>
                </div>
            ))}
        </div>
    );
}
