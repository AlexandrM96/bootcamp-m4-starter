import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import down from './img/down.png';

class Header extends Component {

    state = {
        downL: false

    }
    render() { 
        return (
            <header className="header">
                <h1 className="header__title">
                    MustSee
                </h1>
                <div className={!this.state.downL? 'down__container' : 'not-down__container'}>
                        <img src={down} className="down__img" alt="logo" />
                    </div>
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