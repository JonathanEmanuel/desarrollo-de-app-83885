import { View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native'
import { colors } from '../global/colors'
import Header from '../components/Header'
import categories from '../data/categories.json';

const handle = () => {
    
}

export const Home = () => {
  return (

    <View style={ styles.container}>
       <Header title="Movie APP" />
        <Text style={ styles.title}> Categorías de Peliculas</Text>

         <FlatList
            data={categories}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                <TouchableOpacity key={item.id} onPress={ handle } >
                    <View style={styles.listItem}>
                      <Text style={styles.listItemText}>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
                )}
        />
    </View>
  )
}

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
        color: colors.text,
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