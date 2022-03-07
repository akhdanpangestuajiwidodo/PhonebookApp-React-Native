/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
const AddButton = () => {
  return (
    <View>
      <Pressable style={style.button}>
        <Text style={style.text}>+</Text>
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
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
});

export default AddButton;
