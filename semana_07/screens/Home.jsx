import { View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native'
import { colors } from '../global/colors'
import { useGetCategoriesQuery} from '../service/movieService'
const Home = ({ navigation }) => {

const { data, error, isLoading } = useGetCategoriesQuery();

  const categories = data;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorías</Text>

      <FlatList
        data={categories}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("MoviesScreen", { category: item.name })}
          >
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: 34,
        padding: 16,
        backgroundColor: colors.background,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background
    },
    title: {
        color: colors.primary,
        fontSize: 20,
        marginBottom: 20
    },
     listItem: {
    padding: 20,
    backgroundColor: '#111',
    marginVertical: 6,
    borderRadius: 10,
    borderColor: colors.border,
    borderWidth: 1
  },
  listItemText: {
    color: '#fff'
  }
})

export default Home