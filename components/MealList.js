import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import MealItem from '../components/MealItem';
import {useSelector} from 'react-redux';

const MealList = (props) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);

  const renderMealItem = (itemData) => {
    const isFav = favoriteMeals.some((meal) => meal.id === itemData.item.id);
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: 'MealDetail',
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
              isFavoriteAlready: isFav,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        renderItem={renderMealItem}
        style={{width: '100%'}}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default MealList;
