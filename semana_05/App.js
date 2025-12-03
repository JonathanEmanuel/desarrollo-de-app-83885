import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Button, Image, View, TouchableOpacity, FlatList } from 'react-native';
import { useState } from 'react';
import { colors } from './global/colors';
import Header from './components/Header';
import ModalMovie from './components/ModalMovie';

import Search from './components/Search';

import movies from './data/movies.json'


export default function App() {
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

      <View style={styles.inputContainer}>
        <Header title="Movie APP" />
        <Search />

  
      </View>

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity key={item.id} onPress={() => handleOpenModal(item)}>
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>{item.title}</Text>
   
              <Image 
                style={ styles.photo}
                source={ { uri: item.photoUrl }} 
              />
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
    flexDirection: "column",
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
  },
    photo:{
    width: 100,
    height: 100,
  },
});
