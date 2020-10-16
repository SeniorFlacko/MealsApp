/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import CategoriesScreen from './screens/CategoriesScreen';

const App: () => React$Node = () => {
  return (
    <View style={styles.screen}>
      <Text>Meals App working!</Text>
      <CategoriesScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ccc',
  },
});

export default App;
