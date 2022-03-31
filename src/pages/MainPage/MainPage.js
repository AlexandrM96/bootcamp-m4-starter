import React, { Component } from 'react';
import './MainPage.css';
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import Movies from '../../components/Movies/Movies';
import Favorites from '../../components/Favorites/Favorites';

class MainPage extends Component {
    state = {
        result: ''
    }
    
    render() {
        return (
            <div className="main-page">
                <Header />
                <main className="main-page__content">
                    <section className="main-page__main-section">
                        <div className="main-page__search-box">
                            {/* Строка поиска и кнопка искать  */}
                            <SearchBox searchRes = {this.state.searchLine} />
                        </div>
                        <div className="main-page__movies">
                            {/* Отображение списка фильмов */}
                            <Movies />
                        </div>
                    </section>
                    <aside className="main-page__favorites">
                        {/* Сохраненный список фильмов */}
                        <Favorites />
                    </aside>
                </main>
            </div>
        );
    }
}

export default MainPage;