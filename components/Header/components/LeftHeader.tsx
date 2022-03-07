/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
const LeftHeader = () => {
  return (
    <View>
      <Text style={style.text}>My contact</Text>
      <Text style={style.textFriend}>Friends (200)</Text>
    </View>
  );
};

const style = StyleSheet.create({
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
});

export default LeftHeader;
