
import { View, Text, Image, StyleSheet } from "react-native";
import { colors } from "../global/colors";

export default function MovieDetail({ route }) {
  const { movie } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{movie.title}</Text>

      <Image style={styles.photo} source={{ uri: movie.photoUrl }} />

      <Text style={styles.subtitle}>{movie.description}</Text>
      <Text style={styles.subtitle}>Categoría: {movie.category}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: colors.background, 
        padding: 20, 
        alignItems: "center" 
    },
    title: { 
        color: "#fff", 
        fontSize: 28, 
        fontWeight: "bold", 
        marginBottom: 20 
    },
    subtitle: { 
        color: "#ccc", 
        fontSize: 18, 
        marginTop: 10 
    },
    photo: { 
        width: 200, 
        height: 200, 
        borderRadius: 10 
    },
});
