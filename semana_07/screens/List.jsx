import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Button, View, TouchableOpacity, FlatList } from 'react-native';
import { useState } from 'react';
import { colors } from './global/colors';
import ModalMovie from './components/ModalMovie';

import { Home } from './screens/Home';

export default function List() {
  const [textItem, setTextItem] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const addMovie = () => {
    if (!textItem.trim()) return;
    const id = movieList.length + 1;
    setMovieList([...movieList, { id, description: textItem }]);
    setTextItem("");
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleDeleteMovie = (item) => {
    setMovieList(movieList.filter(m => m.id !== item.id));
    handleCloseModal();
  };

  return (
    <View style={styles.screen}>

      <Home />


      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={setTextItem}
          value={textItem}
          style={styles.input}
          placeholder="Nombre de la película"
          placeholderTextColor="#888"
        />
        <Button onPress={addMovie} title='Agregar Pelicula' color="#e50202" />
      </View>

      <FlatList
        data={movieList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity key={item.id} onPress={() => handleOpenModal(item)}>
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <ModalMovie
        visible={modalVisible}
        onClose={handleCloseModal}
        onDelete={handleDeleteMovie}
        item={selectedItem}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 34,
    padding: 16,
    backgroundColor: colors.background,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 20
  },
  input: {
    flex: 1,
    padding: 10,
    color: '#fff',
    borderBottomColor: colors.border,
    borderBottomWidth: 1
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
});
