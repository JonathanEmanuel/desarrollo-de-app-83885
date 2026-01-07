import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useGetMoviesQuery } from "../service/movieService";
// import movies from "../data/movies.json";
import { colors } from "../global/colors";

export default function Movies({ route, navigation }) {
  
  const { data, error, isLoading } = useGetMoviesQuery();
  
  const movies = data;
  console.log(movies)
  const category = route?.params?.category;

  const filtered = category
    ? movies.filter(m => m.category === category)
    : movies;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {category ? `Películas de ${category}` : "Todas las Películas"}
      </Text>

      <FlatList
        data={filtered}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Detail", { movie: item })}>
            <View style={styles.item}>
              <Text style={styles.text}>{item.title}</Text>
              <Image style={styles.photo} source={{ uri: item.photoUrl }} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: colors.background, 
        padding: 20 
    },
    title: { 
        color: colors.primary, 
        fontSize: 22, 
        marginBottom: 20 
    },
    item: {
        padding: 20,
        backgroundColor: "#111",
        marginVertical: 6,
        borderRadius: 10,
        borderColor: colors.border,
        borderWidth: 1,
    },
    text: { 
        color: "#fff" 
    },
    photo: { 
        width: 100, 
        height: 100 
    },
});
