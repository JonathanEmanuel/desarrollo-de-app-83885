import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Button,  View, TouchableOpacity, FlatList, Modal } from 'react-native';
import { useState } from "react"
export default function App() {

  const [ textItem, setTextItem ] = useState("");
  const [ itemList, setItemList ] = useState([]);
  const [ modalVisible, setModalVisible ] = useState(true);

  
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
      
      {  /* Seccion del Modal */  }

      <Modal visible={modalVisible} transparent animationType='fade' >
        <View style={ styles.modalContainer }>
            <View style={styles.modalContent}>
              <Text  style={ styles.modaleTitle}> Soy el Título</Text>

            </View>
            <Text> Detalle de la Tarea</Text>
            
            <View style={ styles.modalButtons}>
               <Button title='Cerrar' onPress={ handleCerrarModal }  />
               <Button title='Eliminar' /> 
            </View>

        </View>


      </Modal>


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
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: '70%',
    backgroundColor: '#d4d1d1ff'
  },
  modalContent: {
     backgroundColor: '#FFF',
     padding: 20,
     justifyContent: 'space-between',
     borderRadius: 10
  },
  modaleTitle: {
     fontSize: 20,
     fontWeight: 'bold'
  },
  modalButtons: {
    flexDirection: 'row',
    gap: 10
  }

});
