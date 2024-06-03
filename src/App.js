import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { products } from './data/products';
import './styles.css';

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    };

    return (
        <div className="app">
            <Header />
            <main>
                <ProductList products={products} addToCart={addToCart} />
                <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
            </main>
            <Footer />
        </div>
    );
};

export default App;
