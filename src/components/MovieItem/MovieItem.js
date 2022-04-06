import React, { Component } from 'react';
import './MovieItem.css';
import store from '../redux/store';
import { MoviItemApi } from '../../api/API';

class MovieItem extends Component {
    LoadStart = (e) => {
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
        const search = imdbID.imdbID;
        MoviItemApi(search);
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