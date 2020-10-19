import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';

const HeaderButton = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('Hello!');
      }}>
      <View style={styles.iconContainer}>
        <Icon style={styles.icon} name="star-outline" size={23} />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  iconContainer: {
    marginHorizontal: 10,
  },
  icon: {
    color: 'white',
  },
});
export default HeaderButton;
