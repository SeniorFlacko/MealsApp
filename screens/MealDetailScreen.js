import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
const MealDetailScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>MealDetailScreen works!</Text>
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
export default MealDetailScreen;
