const initialState = {
    search: ''
}

function reducer(state = initialState, action) {

    switch (action.type) {
        case 'ADD_FILM':
            const cart = action.payload.res;
            //  console.log('массив в reducer',action.payload.res);
            return { cart }
        default:
            return state;
    }
}
export default reducer;