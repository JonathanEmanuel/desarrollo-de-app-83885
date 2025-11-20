import React from 'react'
import {StyleSheet,  Modal, View, Text, Button } from 'react-native'

const ModalItem = ( props ) => {
  const { onCerrarModal, modalVisible, item } = props;
  

  return (
    <Modal visible={modalVisible} transparent animationType='fade' >
        <View style={ styles.modalContainer }>
            <View style={styles.modalContent}>
               <Text  style={ styles.modaleTitle}> Soy el Título</Text>
            </View>
            <Text> Contenido del Modal </Text>
                
            <View style={ styles.modalButtons}>
                <Button title='Cerrar' onPress={ onCerrarModal }  />
                <Button title='Eliminar' /> 
            </View>
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
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
})

export default ModalItem