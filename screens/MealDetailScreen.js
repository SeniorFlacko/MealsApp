import React from 'react';
import {View, StyleSheet, Text, Button, ScrollView, Image} from 'react-native';
import HeaderButton from '../components/HeaderButton';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam('mealId');
  const meals = useSelector((state) => state.meals.meals);
  const selectedMeal = meals.find((meal) => meal.id === mealId);

  // useEffect(() => {
  //   props.navigation.setParams({mealTitle: selectedMeal.title});
  // }, [selectedMeal]);

  return (
    <ScrollView>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
      <View style={styles.details}>
        <Text>{selectedMeal.duration}m</Text>
        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text>{selectedMeal.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => {
        return <ListItem key={ingredient}>{ingredient}</ListItem>;
      })}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step) => {
        return <ListItem key={step}>{step}</ListItem>;
      })}
    </ScrollView>
  );
};

MealDetailScreen['navigationOptions'] = (navigationData) => {
  // const mealId = navigationData.navigation.getParam('mealId');
  // const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const title = navigationData.navigation.getParam('mealTitle');

  return {
    headerTitle: title,
    headerRight: () => <HeaderButton />,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
});
export default MealDetailScreen;
