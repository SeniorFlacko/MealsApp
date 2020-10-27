import {act} from 'react-test-renderer';
import {MEALS} from '../../data/dummy-data';
import {TOGGLE_FAVORITE} from '../actions/meals';

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

    default:
      return state;
  }
};

export default mealsReducer;
