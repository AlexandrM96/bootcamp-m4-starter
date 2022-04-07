import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import down from './img/down.png';
import store from '../redux/store';

class Header extends Component {

    state = {
        Loading: false,
        idLink : ':id'
    }

    componentDidMount = () => {
        store.subscribe(() => {
            const state = store.getState();
            this.setState({
                Loading: state.flag,
                idLink: state.ID
            });
        });
    };
    render() {
        return (
            <header className="header">
                <h1 className="header__title">
                    MustSee
                </h1>
                <div className={!this.state.Loading? 'not-load__container' : 'load__container'}>
                        <img src={down} className="load__img" alt="logo" />
                    </div>
                <ul className="header__list">
                    <li className="header__list-item">
                    <Link className="header__list-link" to="/">Поиск</Link>                        
                    </li>
                    <li className="header__list-item">
                    <Link className="header__list-link" to={`/list/${this.state.idLink}`}>Мой список</Link>
                    </li>
                </ul>
            </header>
        );
    }
}
 
export default Header;