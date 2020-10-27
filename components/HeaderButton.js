import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';

const HeaderButton = (props) => {
  return (
    <TouchableOpacity onPress={props.toggleFavoriteHandler}>
      <View style={styles.iconContainer}>
        {props.filled ? (
          <Icon style={styles.icon} name="star" size={23} />
        ) : (
          <Icon style={styles.icon} name="star-outline" size={23} />
        )}
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
