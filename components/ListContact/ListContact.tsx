/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  AsyncStorage,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type formDataItem = {
  name: string;
  phoneNumber: string;
  avatarImage: string;
};

const ListContact = () => {
  const result: formDataItem[] = [];
  //Hooks Contacts
  const [contacts, setContact] = useState(result);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contacts]);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@contacts');
      if (value !== null) {
        setContact(JSON.parse(value));
        console.log('Data Storage', contacts);
      }
    } catch (e) {
      // error reading value
    }
  };
  return (
    <>
      {contacts.map(contact => (
        <View style={style.parentListContainer}>
          <View>
            <View style={style.leftSideList}>
              <Image
                source={require('../../image/user.jpg')}
                style={style.imageContactList}
              />
              <View>
                <Text style={style.nameContact}>{contact.name}</Text>
                <Text style={style.nomorContact}>{contact.phoneNumber}</Text>
              </View>
            </View>
          </View>
          <View>
            <Pressable style={style.buttonDelete}>
              <Image
                source={require('../../image/delete.png')}
                style={style.imageDelete}
              />
            </Pressable>
          </View>
        </View>
      ))}
    </>
  );
};

const style = StyleSheet.create({
  parentListContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.2,
  },
  leftSideList: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageContactList: {
    width: 40,
    height: 40,
    marginRight: 12,
    marginLeft: 3,
    borderRadius: 8,
  },
  nameContact: {
    fontSize: 14,
    fontWeight: '500',
  },
  nomorContact: {
    fontSize: 12,
    fontWeight: '400',
  },
  buttonDelete: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 6.5,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: 'red',
  },
  imageDelete: {
    width: 15,
    height: 15,
  },
});

export default ListContact;
