import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() { 
        return (
            <header className="header">
                <h1 className="header__title">
                    MustSee
                </h1>
                <ul className="header__list">
                    <li className="header__list-item">
                    <Link className="header__list-link" to="/">Поиск</Link>                        
                    </li>
                    <li className="header__list-item">
                    <Link className="header__list-link" to="/list/:id">Мой список</Link>
                    </li>
                </ul>
            </header>
        );
    }
}
 
export default Header;