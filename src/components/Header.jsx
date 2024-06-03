import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img src="src\images\logo.png" alt="Logo" />
            </div>
            <nav className="header__nav">
                <a href="/">Главная</a>
                <a href="/3d-design">3D Дизайн</a>
                <a href="/business">Для бизнеса</a>
                <a href="/delivery">Доставка</a>
                <a href="/about">О нас</a>
                <a href="/reviews">Отзывы</a>
                <a href="/contacts">Контакты</a>
            </nav>
            <div className="header__search">
                <button className="header__catalog">Каталог</button>
                <input type="text" placeholder="Я ищу..." />
                <button className="header__search-button">🔍</button>
            </div>
            <div className="header__contact">
                <span className="header__location">Алматы</span>
                <span className="header__phone">8 (727) 344-99-00</span>
                <button className="header__cart">🛒</button>
            </div>
        </header>
    );
};

export default Header;
