import React, { Component } from 'react';
import './ListPage.css';
import store from '../../components/redux/store';

class ListPage extends Component {
    state = {
        movies: [
            { title: 'The Godfather', year: 1972, imdbID: 'tt0068646' }
        ]
    }

    componentDidMount = () => {
        console.log('qwde',store,store.subscribe)
        store.subscribe(() => {
            const state = store.getState();
            console.log('listPage', state, state.newIdlistFilm);
            this.setState({
                movies: state.newIdlistFilm
            });
        });

        // const id = this.props.match.params;
        // console.log(id);
        // const url = `https://acb-api.algoritmika.org/api/movies/list/${id}`;
        // fetch(url)
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log(data);
        //     }
        //     );
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
                                <a href='https://www.imdb.com/title/tt0068646/' target='_blank'>{item.title} ({item.year})</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default ListPage;