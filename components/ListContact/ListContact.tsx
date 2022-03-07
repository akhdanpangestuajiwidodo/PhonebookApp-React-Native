/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
const ListContact = () => {
  return (
    <View style={styleApp.parentListContainer}>
      <View>
        <View style={styleApp.leftSideList}>
          <Image
            source={require('../../image/user.jpg')}
            style={styleApp.imageContactList}
          />
          <View>
            <Text>Nama</Text>
            <Text>081xxx</Text>
          </View>
        </View>
      </View>
      <View>
        <Text>Delete</Text>
      </View>
    </View>
  );
};

const styleApp = StyleSheet.create({
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
  imageContactList: {width: 40, height: 40, marginRight: 12, borderRadius: 8},
});

export default ListContact;
