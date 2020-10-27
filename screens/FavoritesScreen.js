import React from 'react';
import MealList from '../components/MealList';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

const FavoritesScreen = (props) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);
  // const favMeals = avaliableMeals.filter((meal) => meal.id === 'm1' || meal.id === 'm2');
  return <MealList listData={favoriteMeals} navigation={props.navigation} />;
};

FavoritesScreen['navigationOptions'] = (navigationData) => {
  return {
    title: 'Your Favorites',
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => {
          navigationData.navigation.toggleDrawer();
        }}>
        <Icon style={styles.icon} name="menu-outline" size={23} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  icon: {
    color: 'white',
    marginHorizontal: 15,
  },
});

export default FavoritesScreen;
