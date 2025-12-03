import React from 'react';
import { StyleSheet, Modal, Image, View, Text, Button } from 'react-native';

const ModalMovie = ({ visible, onClose, onDelete, item }) => {
  
  return (
    <Modal
      visible={visible}
      transparent
      animationType='fade'
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>

          <Text style={styles.modalTitle}>
            {item ? item.description : 'Detalles de la película'}
          </Text>
             <Image  
                style={ styles.photo} 
                  source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                  }}
            />
          <Text style={styles.modalSubtitle}>
            {item
              ? 'sinopsis, duracion, categoría'
              : 'Seleccionar un item para ver mas información.'}
          </Text>

          <View style={styles.modalButtons}>
            <Button color="#e50202" title='Cerrar' onPress={onClose} />
            <Button color="#e50202" title='Eliminar' onPress={() => onDelete(item)} />
          </View>

        </View>
      </View>
    </Modal>
  );
};

export default ModalMovie;

const styles = StyleSheet.create({
  photo:{
    width: 100,
    height: 100,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.85)'
  },
  modalContent: {
    width: '80%',
    padding: 24,
    borderRadius: 12,
    backgroundColor: '#111',
    borderColor: '#e50202',
    borderWidth: 1.5,
    alignItems: 'center'
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center'
  },
  modalSubtitle: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 20,
    textAlign: 'center'
  },
  modalButtons: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
