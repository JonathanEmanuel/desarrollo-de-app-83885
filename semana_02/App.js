import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Button,  View } from 'react-native';
import { useState } from "react"
export default function App() {


  const [ textItem, setTextItem ] = useState("");
  const [ itemList, setItemList ] = useState([]);
  
  const addItem = () => {
    console.log( 'Agregando....' );
    if( !textItem.trim()) return
    const id = crypto.randomUUID(); // Simulamos el Id de la db
    setItemList( [...itemList, { id, description: textItem } ]  );

    setTextItem("");
  }

  return (
    <View style={styles.screen}>
      <View style={ styles.inputContainer}>
        <TextInput onChangeText={ setTextItem } value={textItem}  style={styles.input}/> 
        <Button onPress={ addItem} title='Nueva Tareas' />
      </View>
      <View>
        {
          itemList.map(  ( item ) => ( 
            <Text style={ { padding: 20, backgroundColor: 'teal', margin:10 }  }>  {  item.description }  | { item.id }</Text> 
          
          ) )
        }
      
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 64,
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
  }
  
});
