import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FiltersScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>FiltersScreen works!</Text>
    </View>
  );
};

FiltersScreen['navigationOptions'] = (navigationData) => {
  return {
    title: 'Filter Meals',
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
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
    marginHorizontal: 15,
  },
});
export default FiltersScreen;
