import React, { Component } from 'react';
import './ListPage.css';
import store from '../../components/redux/store';
import Header from '../../components/Header/Header';

class ListPage extends Component {
    state = {
        movies: [],
        title: ''
    }

    componentDidMount = () => {
        store.subscribe(() => {
            const state = store.getState();
            this.setState({
                movies: state.newIdlistFilm
            });
        });

        const id = this.props.match.params.id;
        const url = `https://acb-api.algoritmika.org/api/movies/list/${id}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    movies: data.movies,
                    title: data.title
                })
            }
            );
        // TODO: запрос к сервер на получение списка
        // TODO: запросы к серверу по всем imdbID
    };

    render() {
        return (
            <>
                <div className="main-page">
                    <Header />
                </div>
                <div className="list-page">
                    <h1 className="list-page__title">Мой список</h1>
                    <div className='list-page__container'>
                        <h2 className='list-page__container-title'>{this.state.title}</h2>
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
                </div>
            </>
        );
    }
}

export default ListPage;