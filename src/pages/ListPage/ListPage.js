import React, { Component } from 'react';
import './ListPage.css';
import store from '../../components/redux/store';

class ListPage extends Component {
    state = {
        movies: [
            // { title: 'The Godfather', year: 1972, imdbID: 'tt0068646' }
        ]
    }

    componentDidMount = () => {
        store.subscribe(() => {
            const state = store.getState();
            console.log('listPage', state, state.newIdlistFilm);
            this.setState({
                movies: state.newIdlistFilm
            });
        });

        const id = this.props.match.params.id;
        const url = `https://acb-api.algoritmika.org/api/movies/list/${id}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ movies: data.movies })
            }
            );
        // TODO: запрос к сервер на получение списка
        // TODO: запросы к серверу по всем imdbID
    };

    render() {
        return (
            <div className="list-page">
                <h1 className="list-page__title">Мой список</h1>
                <ul>
                    {this.state.movies.map((item) => {
                        return (
                            <li key={item.imdbID}>
                                <a href={`https://www.imdb.com/title/${item.imdbID}/`} target='_blank'>{item.Title} ({item.Year})</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default ListPage;