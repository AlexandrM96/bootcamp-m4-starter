import store from "../components/redux/store";

//запрос для SearchBox
export function SearchBoxApi(ResultState) {

    const apikey = 'c16ec1a3'; //Here is your API key: c16ec1a3
    const search = ResultState;
    const url = `http://www.omdbapi.com/?s=${search}&apikey=${apikey}`;
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
        }
        );
}

//запрос для MoviItem
export function MoviItemApi(search) {

    const apikey = 'c16ec1a3'; //Here is your API key: c16ec1a3
    const url = `http://www.omdbapi.com/?i=${search}&apikey=${apikey}`;
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

// пост запрос для Favorits
export function FavoritsApi(data) {

    const url = `https://acb-api.algoritmika.org/api/movies/list`;
    fetch(url, {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            store.dispatch({
                type: 'ADD_List_FILM_ID',
                payload: {
                    idFilm: data,
                    load: false,
                    link: true
                }
            })
        })
        .catch((error) => {
            console.error('Error:', error);
        });

}

//запрос для ListPage
export function ListPageApi(id) {

    const url = `https://acb-api.algoritmika.org/api/movies/list/${id}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            store.dispatch({
                type: 'FILM_LIST_PAGE',
                payload: {
                    movies: data,
                    load: false
                }
            })
        }
        );
}