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
import {Button, Text, View} from 'react-native';

const App = () => {
  return (
    <View>
      <View>
        {/* Header */}
        <Text>Phone Book App</Text>
        <View>
          <View>
            <Text>Contact</Text>
          </View>
          <View>
            <Button title="Add Contact" />
          </View>
        </View>
        {/* End Header */}
        {/* Segment Search */}
        <View></View>
        {/* End Segment Search */}
      </View>
    </View>
  );
};

export default App;
