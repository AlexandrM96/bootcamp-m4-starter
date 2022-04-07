import React, { Component } from 'react';
import './Favorites.css';
import store from '../redux/store';
import { Link } from 'react-router-dom';
import { FavoritsApi } from '../../api/API';

class Favorites extends Component {
    state = {
        title: '',
        movies: [],
        link: false,
        idFilmList: ''
    }

    newListChangeHandler = (e) => {
        this.setState({ title: e.target.value });
    }

    LoadStart = (e) => {
        store.dispatch({
            type: 'LOADING_STATUS',
            payload: {
                load: true
            }
        }
        )
    }

    clickSave = () => {
        this.LoadStart();
        const data = this.state;
        FavoritsApi(data);
    }

    clickDel = (imdbID) => {
        store.dispatch({
            type: 'REMOVE_FILM',
            payload: {
                id: imdbID
            }
        })
    }

    componentDidMount = () => {
        store.subscribe(() => {
            const state = store.getState();
            this.setState({
                movies: state.addListFilm,
                link: state.Link,
                idFilmList: state.ID
            });
        });
    };
    render() {
        if(!this.state) return ;
        return (
            <div className="favorites">
                <input
                    onChange={this.newListChangeHandler}
                    type="text"
                    placeholder="Введите название списка"
                    className="favorites__name"
                />
                <ul className="favorites__list">
                    {this.state.movies && this.state.movies.map((item) => {
                        return <li className='favorites__element' key={item.imdbID}>
                            {item.Title} ({item.Year})
                            <button onClick={() => this.clickDel(item.imdbID)} className='favorites__del'>X</button></li>;
                    })}
                </ul>
                {this.state.link === true ?
                    <Link to={`/list/${this.state.idFilmList}`}
                        className='favorites__link'>Перейти к списку</Link>
                    :
                    <button
                        onClick={this.clickSave}
                        disabled={this.state.title === '' || +this.state.movies.length === 0}
                        type="button"
                        className={
                            this.state.title === '' || +this.state.movies.length === 0 ?
                                "favorites__save-disabled" : "favorites__save"
                        }>
                        Сохранить список
                    </button>}

            </div>
        );
    }
}

export default Favorites;