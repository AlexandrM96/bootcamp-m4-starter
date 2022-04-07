import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';
import store from '../redux/store';

class Movies extends Component {
    state = {
        data: []
    }

    componentDidMount = () => {
        store.subscribe(() => {
            const state = store.getState();
            state.newCart && this.setState({
                data: state.newCart[0]
            });
        });

    };

    render() {
        return (
            <ul className="movies">
                {this.state.data && this.state.data.map((movie) => (
                    <li className="movies__item" key={movie.imdbID}>
                        <MovieItem {...movie} />
                    </li>
                ))}
            </ul>
        );
    }
}

export default Movies;