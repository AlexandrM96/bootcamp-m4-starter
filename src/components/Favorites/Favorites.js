import React, { Component } from 'react';
import './Favorites.css';
import store from '../redux/store';

class Favorites extends Component {
    state = {
        title: 'Новый список',
        movies: [
            { imdbID: 'tt0068646', title: 'The Godfather', year: 1972 }
        ]
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
                <input value="Новый список" className="favorites__name" />
                <ul className="favorites__list">
                    {this.state.movies.map((item) => {
                        return <li className='favorites__element' key={item.id}>{item.Title} ({item.Year})<button className='favorites__del'>X</button></li>;
                    })}
                </ul>
                <button type="button" className="favorites__save">Сохранить список</button>
            </div>
        );
    }
}

export default Favorites;