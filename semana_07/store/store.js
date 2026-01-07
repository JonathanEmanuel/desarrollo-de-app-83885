import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from '../feactures/favorites/favoritesSlice'
import { movieApi } from '../service/movieService';


export const store = configureStore({
    reducer: {
        [ movieApi.reducerPath ]: movieApi.reducer,
        favorites: favoritesReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
})