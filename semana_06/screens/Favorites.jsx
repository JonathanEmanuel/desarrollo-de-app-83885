import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import { favorites } from "../data/favorites";
import { removeFromFavorites } from "../data/favoriteFunctions";
import { colors } from "../global/colors";

export default function Favorites({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Favoritos</Text>

      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text style={styles.empty}>No hay favoritos todavía.</Text>}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Detail", { movie: item })}>
            <View style={styles.item}>
              <Image style={styles.photo} source={{ uri: item.photoUrl }} />
              <Text style={styles.text}>{item.title}</Text>

              <TouchableOpacity onPress={() => removeFromFavorites(item.id)}>
                <Text style={styles.delete}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: colors.background },
  title: { color: colors.primary, fontSize: 26, marginBottom: 20 },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#111",
    marginVertical: 6,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },
  text: { color: "#fff", flex: 1, marginLeft: 10 },
  photo: { width: 60, height: 60, borderRadius: 8 },
  delete: { color: colors.accent, fontWeight: "bold" },
  empty: { color: "#888", marginTop: 30, textAlign: "center" },
});
