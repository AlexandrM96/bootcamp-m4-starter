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
            this.setState({ 
                data: state.cart
            });
        });
    };

    render() {
        return (
            <ul className="movies">
                {this.state.data.map((movie) => (
                    <li className="movies__item" key={movie.imdbID}>
                       {movie.title} <MovieItem {...movie} />
                    </li>
                ))}
            </ul>
        );
    }
}

export default Movies;