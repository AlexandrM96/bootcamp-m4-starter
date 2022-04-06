import React, { Component } from 'react';
import './SearchBox.css';
import store from '../redux/store';
import { SearchBoxApi } from '../../api/API';
class SearchBox extends Component {

    state = {
        searchLine: ''
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
        SearchBoxApi(this.state.searchLine);
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