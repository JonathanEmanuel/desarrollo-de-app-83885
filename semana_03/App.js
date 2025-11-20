import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Button,  View, TouchableOpacity, FlatList, Modal } from 'react-native';
import { useState } from "react"

import ModalItem  from './components/ModalItem';

export default function App() {

  const [ textItem, setTextItem ] = useState("");
  const [ itemList, setItemList ] = useState([]);
  const [ modalVisible, setModalVisible ] = useState(false);

  
  const addItem = () => {

    if( !textItem.trim()) return
    const id =   itemList.length + 1; // Simulamos el Id de la db
    setItemList( [...itemList, { id, description: textItem } ]  );

    setTextItem("");
  }
  
  const handleCerrarModal = () => {
    setModalVisible(false);
  }

  const handleOpenModal = () => {
    setModalVisible(true);
  }

  const handleEliminarTask = () => {
    
  }

  return (
    <View style={styles.screen}>
      <View style={ styles.inputContainer}>
        <TextInput onChangeText={ setTextItem } value={textItem}  style={styles.input}/> 
        <Button onPress={ addItem} title='Nueva Tareas' />
      </View>
      
       <FlatList 
           data={ itemList }
           keyExtractor={ ( item) => item.id }
           renderItem={ ( {item}  ) => ( 
            <TouchableOpacity key={ item.id  } onPress={  handleOpenModal } >
              <View style={ styles.listItem }>
                 <Text>  { item.description} </Text>
              </View>
            </TouchableOpacity>
            )}
        />
      <ModalItem 
           onCerrarModal={handleCerrarModal} modalVisible={modalVisible} 
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
    backgroundColor: "rgba(234, 234, 234, 1)"
  },
  inputContainer:{
    backgroundColor: "#3243",
    justifyContent: "space-between",
    gap: 10,
    flexDirection:"row",
    marginBottom: 20
  },
  input: {
    padding: 10,
    width: 200,
    borderBottomColor: "#000",
    borderBottomWidth: 1
  },
  listItem : { 
    padding: 20, 
    backgroundColor: 'teal', 
    margin:10,
    borderRadius: 10
  }

});
