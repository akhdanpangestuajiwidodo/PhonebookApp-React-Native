/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Modal,
  TextInput,
  Alert,
  AsyncStorage,
} from 'react-native';

// import AsynStorage from '@react-native-async-storage/async-storage';

interface ModalState {
  modalVisible: boolean;
  setModalVisible: Function;
}

type formDataItem = {
  name: string;
  phoneNumber: string;
  avatarImage: string;
};
const ModalInput = (props: ModalState) => {
  const result: formDataItem[] = [];
  //Hooks Contacts
  const [contacts, setContact] = useState(result);

  //Hooks Name
  const [name, setName] = useState('');

  //Hooks Phonebook
  const [phoneNumber, setPhoneNumber] = useState('');

  //Save Data to local
  const storeData = async () => {
    let data = [...contacts];
    data.push({
      name: name,
      phoneNumber: phoneNumber,
      avatarImage: '../../image/user.jpg',
    });
    console.log(data, contacts.length);
    setContact(data);
    setName('');
    setPhoneNumber('');
    const jsonValue = JSON.stringify(data);
    AsyncStorage.setItem('@contacts', jsonValue);
    closeModal();
    Alert.alert('Data has been saved');
  };

  // //getData
  // const getData = async () => {
  //   AsyncStorage.getAllKeys((err, keys) => {
  //     AsyncStorage.multiGet(keys, (error, stores) => {
  //       stores.map((result, i, store) => {
  //         console.log('Dataku', {[store[i][0]]: store[i][1]});
  //         return true;
  //       });
  //     });
  //   });
  // };

  //Function close modal
  const closeModal = () => {
    props.setModalVisible(!props.modalVisible);
  };

  //Function setName
  const changeNameInput = (text: string) => {
    setName(text);
  };

  //Function setPhoneNumber
  const changePhoneNumberInput = (text: string) => {
    setPhoneNumber(text);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={closeModal}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Input Data Contact</Text>
          <View>
            <TextInput
              style={styles.searchInput}
              value={name}
              multiline={false}
              onChangeText={changeNameInput}
              placeholder={'Name'}
            />
          </View>
          <View>
            <TextInput
              style={styles.searchInput}
              value={phoneNumber}
              multiline={false}
              onChangeText={changePhoneNumberInput}
              placeholder={'08xxxxx'}
            />
          </View>
          <Pressable
            style={[styles.button, styles.buttonSave]}
            onPress={storeData}>
            <Text style={styles.textStyle}>Save</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={closeModal}>
            <Text style={styles.textStyle}>Close</Text>
          </Pressable>
          {/* <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => getData()}>
            <Text style={styles.textStyle}>Cek</Text>
          </Pressable> */}
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
