/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import AddButton from './components/AddButton';
import LeftHeader from './components/LeftHeader';
const HeaderComponent = () => {
  return (
    <View style={style.parentHeader}>
      <View style={style.containerHeader}>
        <LeftHeader />
        <AddButton />
      </View>
      <View>
        <TextInput
          style={style.searchInput}
          value={'Search Contact'}
          multiline={false}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  titleApp: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  parentContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  parentHeader: {
    paddingVertical: 30,
    paddingHorizontal: 24,
    backgroundColor: '#2A3035',
  },
  containerHeader: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: '#017BFF',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  textFriend: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: '300',
    letterSpacing: 0.25,
    color: 'white',
  },
  searchInput: {
    fontSize: 12,
    borderWidth: 0,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    backgroundColor: '#FAFAFA',
    color: '#787878',
    fontWeight: '600',
  },
});

export default HeaderComponent;
