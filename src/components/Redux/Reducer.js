const initialState = {
    film: [],
    addListFilm: [],
    idListFilm: []
}

function reducer(state = initialState, action) {

    switch (action.type) {
        case 'ADD_FILM':
            const cart = action.payload.res;
            const newCart = [...state.film, cart];
            return { ...state, newCart }
        case 'ADD_List_FILM':
            const addFilm = action.payload.imdbID;
            // const NewAddListFilm = [...state.addListFilm, addFilm]
            const NewAddListFilm = state.addListFilm.push(addFilm);
            return { ...state, NewAddListFilm }
        case 'ADD_List_FILM_ID':
            const idlistFilm = action.payload.idFilm;
            const newIdlistFilm = [...state.idListFilm, idlistFilm];
            console.log('новый массив', newIdlistFilm)
            return { ...state, newIdlistFilm };
        case 'REMOVE_FILM':
            const delFilm = action.payload.id
            let NewDelFilm = [...state.addListFilm].filter((item) =>
            item.imdbID !== delFilm ) 
            return { ...state, addListFilm: NewDelFilm }
        default:
            return state;
    }
}
export default reducer;