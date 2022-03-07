/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Modal,
  Alert,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ModalState {
  modalVisible: boolean;
  setModalVisible: Function;
}

let sub: {[key: string]: any} = {
  name: null,
  phoneNumber: null,
  avatarImage: null,
};

type formDataItem = {
  name: string;
  phoneNumber: string;
  avatarImage: string;
};
const ModalInput = (props: ModalState) => {
  const result: formDataItem[] = [];
  //Hooks Contacts
  const [contacts, setContact] = useState(result);
  //Hooks form data
  const [formData, setFormData] = useState(sub);

  //Hooks test
  const [testText, setTestText] = useState(1);

  //Handle change value form input
  function handleChange(event: any) {
    let data = {...formData};
    data[event.target.name] = event.target.value;
    setFormData(data);
  }

  //Save Data to local
  const storeData = async () => {
    try {
      let data = [...contacts];
      data.push({
        name: formData.name,
        phoneNumber: formData.phoneNumber,
        avatarImage: '../../image/user.jpg',
      });
      setContact(data);
      setFormData({name: '', phoneNumber: ''});
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem('contacts', jsonValue);
      props.setModalVisible(!props.modalVisible);
    } catch (e) {
      // saving error
    }
  };

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
          <Text style={styles.modalText}>Input Data Contact {testText}</Text>
          <View>
            <TextInput
              style={styles.searchInput}
              value={formData.name}
              multiline={false}
              onChange={handleChange}
              placeholder={'Name'}
            />
          </View>
          <View>
            <TextInput
              style={styles.searchInput}
              value={formData.phoneNumber}
              multiline={false}
              onChange={handleChange}
              placeholder={'08xxxxx'}
            />
          </View>
          <Pressable
            style={[styles.button, styles.buttonSave]}
            onPress={() => storeData}>
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
