import React from "react";
import { Platform } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

export default function CategoryMealScreen(props) {
  const catId = props.navigation.getParam("categoryId");

  const displayMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return <MealList listData={displayMeals} navigation={props.navigation} />;
}

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? selectedCategory.color : ""
    },
    headerTintColor: Platform.OS === "android" ? "#fff" : selectedCategory.color
  };
};
