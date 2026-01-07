import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://movie-app-58c63-default-rtdb.firebaseio.com/' }),
    endpoints: (build) => ({
        // GET
        getCategories: build.query({
            query: () => 'categories.json',
        }),
        // GET
        getMovies: build.query({
            query: () => 'movies.json'
        }),
        // POST Subscription
        addSub: build.mutation({
            query: (newSub) => ({
                url: 'subsription.json',
                method: 'POST',
                body: newSub
            })
        }),
        // PUT Sub
        putSub: build.mutation({
            query: ({id, sub}) => ({
                url: `subsription/${id}.json`,
                method: 'PUT',
                body: newSub
            })
        }),
        // POST Favorites
        addFavorites: build.mutation({
            query: (newMovie) => ({
                url: 'favorites.json',
                method: 'POST',
                body: newMovie
            })
        }),
        // DELETE Favorites
        deleteFavorites: build.mutation({
            query: (id) => ({
                url: `favorites/${id}.json`,
                method: 'DELETE',
                body: newMovie
            })
        })
    }),
});



export const {  
    useGetCategoriesQuery, 
    useGetMoviesQuery,
    useAddSubMutation,
    usePutSubMutation,
    useAddFavoritesMutation,
    useDeleteFavoritesMutation
} = movieApi 