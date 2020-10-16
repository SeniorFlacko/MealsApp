import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';

const CategoryMealScreen = (props) => {
  const catId = props.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find((cat) => cat.id == catId);

  return (
    <View style={styles.screen}>
      <Text>CategoryMealScreen works!</Text>
      <Text>{selectedCategory.title}</Text>
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
