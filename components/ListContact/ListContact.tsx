/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

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
  }, [contacts.length]);

  //Function getData
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@contacts');
      if (value !== null) {
        setContact(JSON.parse(value));
        console.log('Data Storage', value.length);
      }
    } catch (e) {
      // error reading value
    }
  };

  //Function delete data
  const deleteData = async (name: string) => {
    try {
      const contactAfterDelete = contacts.filter(
        contact => contact.name !== name,
      );
      setContact(contactAfterDelete);
      await AsyncStorage.setItem(
        '@contacts',
        JSON.stringify(contactAfterDelete),
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {contacts.map((contact, index) => (
        <View style={style.parentListContainer} key={index}>
          <View>
            <View style={style.leftSideList}>
              <Image
                source={require('../../image/user.jpg')}
                style={style.imageContactList}
              />
              <View>
                <Text style={style.nameContact}>Index {index}</Text>
                <Text style={style.nameContact}>{contact.name}</Text>
                <Text style={style.nomorContact}>{contact.phoneNumber}</Text>
              </View>
            </View>
          </View>
          <View>
            <Pressable
              style={style.buttonDelete}
              onPress={() => deleteData(contact.name)}>
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
