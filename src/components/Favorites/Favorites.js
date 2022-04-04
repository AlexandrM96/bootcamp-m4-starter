import React, { Component } from 'react';
import './Favorites.css';
import store from '../redux/store';
import { Link } from 'react-router-dom';

class Favorites extends Component {
    state = {
        title: '',
        movies: [],
        link: false
    }

    newListChangeHandler = (e) => {
        this.setState({ title: e.target.value });
    }

    LoadStart = (e) => {
        console.log('старт')
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
        const url = `https://acb-api.algoritmika.org/api/movies/list`;
        const data = this.state;
        fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('пост запрос', data)
                store.dispatch({
                    type: 'ADD_List_FILM_ID',
                    payload: {
                        idFilm: data,
                        load: false
                    }
                })
                this.setState({
                    listId: data.id,
                    link: true
                });
            })
            .catch((error) => {
                console.error('Error:', error);
            });

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
                movies: state.addListFilm
            });
        });
    };
    render() {
        return (
            <div className="favorites">
                <input
                    onChange={this.newListChangeHandler}
                    type="text"
                    placeholder="Введите название списка"
                    className="favorites__name"
                />
                <ul className="favorites__list">
                    {this.state.movies.map((item) => {
                        return <li className='favorites__element' key={item.imdbID}>
                            {item.Title} ({item.Year})
                            <button onClick={() => this.clickDel(item.imdbID)} className='favorites__del'>X</button></li>;
                    })}
                </ul>
                {this.state.link === true ?
                    <Link to={`/list/${this.state.listId}`}
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