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
import MealsNavigator from './navigation/MealsNavigation';

const App: () => React$Node = () => {
  return <MealsNavigator />;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ccc',
  },
});

export default App;
