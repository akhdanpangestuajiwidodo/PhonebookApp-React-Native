/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Modal,
  Alert,
  TextInput,
} from 'react-native';
interface ModalState {
  modalVisible: boolean;
  setModalVisible: Function;
}
const ModalInput = (props: ModalState) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        props.setModalVisible(!props.modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Input Data Contact</Text>
          <View>
            <TextInput
              style={styles.searchInput}
              value={'Name'}
              multiline={false}
            />
          </View>
          <View>
            <TextInput
              style={styles.searchInput}
              value={'081xxxx'}
              multiline={false}
            />
          </View>
          <Pressable style={[styles.button, styles.buttonSave]}>
            <Text style={styles.textStyle}>Save</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => props.setModalVisible(!props.modalVisible)}>
            <Text style={styles.textStyle}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  modalView: {
    // width: 500,
    margin: 100,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
    elevation: 2,
    width: 200,
    marginBottom: 12,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: 'red',
  },
  buttonSave: {
    backgroundColor: 'green',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  searchInput: {
    width: 200,
    fontSize: 12,
    borderWidth: 0,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    backgroundColor: '#FAFAFA',
    color: '#787878',
    fontWeight: '600',
    marginBottom: 12,
  },
});

export default ModalInput;
