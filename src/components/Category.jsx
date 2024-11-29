import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Category = ({item, SelectedCategory, setSelectedCategory}) => {
  console.log('SelectedCategory:', SelectedCategory);
  return (
    <TouchableOpacity onPress={() => setSelectedCategory(item)}>
      <Text
        style={[
          styles.Categoryfresh,
          SelectedCategory === item && {
            color: 'white',
            backgroundColor: '#32A7A1',
          },
        ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  Categoryfresh: {
    fontSize: 18,
    fontWeight: '600',
    margin: 20,
    backgroundColor: '#B7B7B7',

    color: '#747D7D',
    borderRadius: 8,
    paddingVertical: 10,
    textAlign: 'center',
    marginHorizontal: 15,
    paddingHorizontal: 15,
  },
});
