import React from 'react';
import {View, StyleSheet, Text, Button, ScrollView, Image} from 'react-native';
import HeaderButton from '../components/HeaderButton';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useCallback} from 'react';
import {toggleFavorite} from '../store/actions/meals';

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

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
    console.log('Dispatching toggle favorite');
  }, [dispatch, mealId]);

  const currentMealIsFavorite = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === mealId),
  );

  useEffect(() => {
    props.navigation.setParams({
      toggleFavoriteHandler: toggleFavoriteHandler,
    });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({
      isFavoriteAlready: currentMealIsFavorite,
    });
  }, [currentMealIsFavorite]);

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
  // const title = navigationData.navigation.getParam('mealTitle');
  const mealTitle = navigationData.navigation.getParam('mealTitle');
  const toggleFavoriteFromNavigator = navigationData.navigation.getParam(
    'toggleFavoriteHandler',
  );

  const isFavoriteAlready = navigationData.navigation.getParam(
    'isFavoriteAlready',
  );

  console.log('isFavoriteAlready: ', isFavoriteAlready);

  return {
    headerTitle: mealTitle,
    headerRight: () => {
      return isFavoriteAlready ? (
        <HeaderButton
          filled={true}
          toggleFavoriteHandler={toggleFavoriteFromNavigator}
        />
      ) : (
        <HeaderButton
          filled={false}
          toggleFavoriteHandler={toggleFavoriteFromNavigator}
        />
      );
    },
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
