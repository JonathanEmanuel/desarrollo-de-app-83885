import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: []
}

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        clearFavorites: ( state ) => {
            state.list = []
        },
        toggleFavorite: ( state, action) => {
            const movie = action.payload;
            // Verificamos si existe la movie
            const exists = state.list.some( m => m.id === movie.id);

            if( exists) {
                // Actualizamos el estado con las peliculas filtrando la existente
                state.list = state.list.filter(  m => m.id !== movie.id )
            } else {
                state.list.push( movie );
            }
        }

    }
})

export const {  toggleFavorite, clearFavorites } = favoritesSlice.actions

export default favoritesSlice.reducer;