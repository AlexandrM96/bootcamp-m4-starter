import React, { Component } from 'react';
import './SearchBox.css';
import store from '../redux/store';

class SearchBox extends Component {

    state = {
        searchLine: '',
        data: null
    }

    searchLineChangeHandler = (e) => {
        this.setState({ searchLine: e.target.value });
    }

    searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        this.LoadStart();
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

    clickButtonSearch = (e) => {
        const apikey = 'c16ec1a3'; //Here is your API key: c16ec1a3
        const search = this.state.searchLine;
        const url = `http://www.omdbapi.com/?s=${search}&apikey=${apikey}`;//http://www.omdbapi.com/?s=${search}apikey=${apikey}
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                store.dispatch({
                    type: 'ADD_FILM',
                    payload: {
                        res: data.Search,
                       load: false
                    }
                })
                this.setState({
                    data: data.Search
                })
            }
            );
    }
    render() {
        const { searchLine } = this.state;
        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={this.searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                        Искать фильм по названию:
                        <input
                            value={searchLine}
                            type="text"
                            className="search-box__form-input"
                            placeholder="Например, Shawshank Redemption"
                            onChange={this.searchLineChangeHandler}
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!searchLine}
                        onClick={this.clickButtonSearch}
                    >
                        Искать
                    </button>
                </form>
            </div>

        );
    }
}

export default SearchBox;