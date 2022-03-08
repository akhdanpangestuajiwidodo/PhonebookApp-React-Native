/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {ScrollView, View} from 'react-native';
import HeaderComponent from './components/Header/Header';
import ListContact from './components/ListContact/ListContact';

const App = () => {
  return (
    <ScrollView>
      <View>
        <HeaderComponent />
        <ListContact />
      </View>
    </ScrollView>
  );
};

export default App;
