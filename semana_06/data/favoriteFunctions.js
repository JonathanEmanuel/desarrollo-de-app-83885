import { favorites } from "./favorites";

export const addToFavorites = (movie) => {
  const exists = favorites.some(f => f.id === movie.id);
  if (!exists) {
    favorites.push(movie);
  }
};

export const removeFromFavorites = (id) => {
  const index = favorites.findIndex(f => f.id === id);
  if (index !== -1) {
    favorites.splice(index, 1);   
  }
};
