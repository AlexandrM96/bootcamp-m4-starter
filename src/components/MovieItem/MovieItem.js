import React, { Component } from 'react';
import './MovieItem.css';
import store from '../redux/store';

class MovieItem extends Component {
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

    clickButtonAddList = (imdbID) => {
        this.LoadStart();
        const apikey = 'c16ec1a3'; //Here is your API key: c16ec1a3
        const search = imdbID.imdbID;
        const url = `http://www.omdbapi.com/?i=${search}&apikey=${apikey}`;//http://www.omdbapi.com/?s=${search}apikey=${apikey}
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                store.dispatch({
                    type: 'ADD_List_FILM',
                    payload: {
                        imdbID: data,
                        load: false
                    }
                })
            }
            );

    }
    render() {
        const { Title, Year, Poster, imdbID } = this.props;
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={Poster} alt={Title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{Title}&nbsp;{Year}</h3>
                    <button onClick={() => this.clickButtonAddList({ imdbID })} type="button" className="movie-item__add-button">
                        Добавить в список
                    </button>
                </div>
            </article>
        );
    }
}

export default MovieItem;