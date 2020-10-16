import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
const MealDetailScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>MealDetailScreen works!</Text>
      <Button
        title="Go back"
        onPress={() => {
          props.navigation.popToTop();
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
export default MealDetailScreen;
