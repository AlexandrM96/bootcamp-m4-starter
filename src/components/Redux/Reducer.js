const initialState = {
    film: [],
    addListFilm: [],
    idListFilm: [],
    flag: false
}

function reducer(state = initialState, action) {

    switch (action.type) {
        case 'ADD_FILM':
            const cart = action.payload.res;
            const loadingOne = action.payload.load;
            const newCart = [...state.film, cart];
            return { ...state, newCart, flag: loadingOne }
        case 'ADD_List_FILM':
            const addFilm = action.payload.imdbID;
            const loadingTwo = action.payload.load;
            // const NewAddListFilm = [...state.addListFilm, addFilm]
            const NewAddListFilm = state.addListFilm.push(addFilm);
            return { ...state, NewAddListFilm, flag: loadingTwo }
        case 'ADD_List_FILM_ID':
            const idlistFilm = action.payload.idFilm;
            const loadingThree = action.payload.load;
            const newIdlistFilm = [...state.idListFilm, idlistFilm];
            console.log('новый массив', newIdlistFilm)
            return { ...state, newIdlistFilm, flag: loadingThree };
        case 'REMOVE_FILM':
            const delFilm = action.payload.id
            let NewDelFilm = [...state.addListFilm].filter((item) =>
                item.imdbID !== delFilm)
            return { ...state, addListFilm: NewDelFilm }
        case 'LOADING_STATUS':
            console.log(action.payload.load);
            const loading = action.payload.load;
            return { ...state, flag: loading }
        default:
            return state;
    }
}
export default reducer;