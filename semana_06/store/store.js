import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from '../feactures/favorites/favoritesSlice'

export const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
    }
})