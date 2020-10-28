import {act} from 'react-test-renderer';
import {MEALS} from '../../data/dummy-data';
import {TOGGLE_FAVORITE, SET_FILTERS} from '../actions/meals';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => (meal.id = action.mealId),
      );
      if (existingIndex >= 0) {
        const updatedFavoriteMeals = [...state.favoriteMeals];
        updatedFavoriteMeals.splice(existingIndex);
        return {...state, favoriteMeals: [...updatedFavoriteMeals]};
      } else {
        const mealToBeAddedToFavorites = state.meals.find(
          (meal) => (meal.id = action.mealId),
        );
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.concat(mealToBeAddedToFavorites),
        };
      }

    case SET_FILTERS:
      const appliedFilters = action.filters;

      const updatedfilteredMeals = state.meals.filter((meal) => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.isVegetarian && !meal.isVegetarian) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }

        return true;
      });
      return {...state, filteredMeals: [...updatedfilteredMeals]};

    default:
      return state;
  }
};

export default mealsReducer;
