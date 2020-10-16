import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
const CategoryMealScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>CategoryMealScreen works!</Text>
      <Button
        title="Go to Meal Detail"
        onPress={() => {
          props.navigation.navigate({routeName: 'MealDetail'});
        }}
      />
      <Button
        title="Go Back"
        onPress={() => {
          // props.navigation.goBack();
          props.navigation.pop();
        }}
      />
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
