import React from 'react';
import {CATEGORIES} from '../data/dummy-data';
import MealList from '../components/MealList';
import {useSelector} from 'react-redux';
import {View, Text} from 'react-native';

const CategoryMealScreen = (props) => {
  const catId = props.navigation.getParam('categoryId');

  const avaliableMeals = useSelector((state) => state.meals.filteredMeals);
  // const selectedCategory = CATEGORIES.find((cat) => cat.id == catId);

  const displayedMeals = avaliableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0,
  );

  if (displayedMeals.length === 0 || !displayedMeals) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>No Avaliable Meals, try changing the filters</Text>
      </View>
    );
  }

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealScreen['navigationOptions'] = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealScreen;
