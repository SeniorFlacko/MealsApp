import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
const CategoryMealScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>CategoryMealScreen works!</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default CategoryMealScreen;
