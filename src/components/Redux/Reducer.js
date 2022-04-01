const initialState = {
    film: [],
    addListFilm: []
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
        default:
            return state;
    }
}
export default reducer;