import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import HeaderStyle from '../constants/HeaderStyle';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FavoriteScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {Platform} from 'react-native';

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeals: {
      screen: CategoryMealScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      ...HeaderStyle,
    },
  },
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoriteScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      ...HeaderStyle,
    },
  },
);

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Icon
              name="restaurant-outline"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Favorites: {
      screen: FavNavigator,
      navigationOptions: {
        tabBarLabel: 'Favorites!',
        tabBarIcon: (tabInfo) => {
          return (
            <Icon name="star-outline" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accentColor,
    },
  },
);

export default createAppContainer(MealsFavTabNavigator);
