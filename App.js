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
import {createStore, combineReducers} from 'redux';
import mealsReducer from './store/reducers/meals';
import {Provider} from 'react-redux';

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ccc',
  },
});

export default App;
