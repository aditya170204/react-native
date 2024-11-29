import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const imageUrl =
  'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg';
const CartCard = () => {
  return (
    <View style={styles.container}>
      <Image source={{uri: imageUrl}} style={styles.coverImage} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>Red Apples</Text>
        <Text style={styles.price}>₹150</Text>
      </View>

      <FontAwesome5 name="trash" size={22} color={'#E96E6E'} />
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    // backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  coverImage: {
    height: 125,
    width: '25%',
    borderRadius: 15,
  },
  cardContent: {
    flex: 1,
    marginHorizontal: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
    color: '#434343',
  },
  price: {
    fontSize: 18,
    fontWeight: 600,
    color: '#5D5D5D',
    marginVertical: 10,
  },
});
