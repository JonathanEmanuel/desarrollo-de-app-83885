import { useDispatch, useSelector  } from 'react-redux'
import { toggleFavorite } from '../feactures/favorites/favoritesSlice'
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../global/colors";

export default function MovieDetail({ route }) {
  const { movie } = route.params;

  const dispatch = useDispatch();
  const favorites = useSelector( (state) => state.favorites.list );
  console.log( favorites)
  console.log(movie);
  // Verificamos si la peli está en favoritos
  const isFavorites = favorites.some( item => item.id === movie.id);

  return (
    <View style={styles.container}>
      <Image style={styles.photo} source={{ uri: movie.photoUrl }} />

      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.subtitle}>{movie.description}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={ () => dispatch( toggleFavorite(movie) ) }
      >
        <Text style={styles.buttonText}>
          { isFavorites ? 'Eliminar de Favoritos' : 'Agregar a Favoritos'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: "center", backgroundColor: colors.background },
  photo: { width: 200, height: 200, borderRadius: 10 },
  title: { color: "#fff", fontSize: 26, marginVertical: 10 },
  subtitle: { color: "#ccc", fontSize: 18, marginBottom: 20 },
  button: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: { color: "#000", fontWeight: "bold" },
});
