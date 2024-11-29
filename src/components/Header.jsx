import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {appleicon} from '../components/';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import HomeScreen from '../screen/HomeScreen';

const Header = ({isCart}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      {isCart ? (
        <View style={{width: '20%'}}>
          <Ionicons
            name="arrow-back"
            size={30}
            color={'#006C67'}
            style={{padding: 5}}
            // style={styles.arrowStyle}
            onPress={() => navigation.navigate('HOME_STACK')}
          />
        </View>
      ) : (
        <Text></Text>
      )}
      {isCart ? (
        <View style={{width: '40%'}}>
          <Text style={[styles.myCart]}>MY CART</Text>
        </View>
      ) : (
        <Text />
      )}

      <View
        style={{
          width: '30%',
          alignItems: 'flex-end',
        }}>
        <Image
          source={require('../assets/images/appIcon.png')}
          style={styles.appIcon}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  appIcon: {
    height: 50,
    width: 50,
    borderRadius: 17,
  },
  arrowStyle: {
    marginTop: 10,
    width: 50,
  },
  appIconContainer: {
    // height: 50,
    // width: 50,
    // position: 'absolute',
    // right: 20,
    // top: 10,
  },
  myCart: {
    fontSize: 28,
    color: '#006C67',
    // width: 200,
    // textAlign: 'center',
    borderRadius: 30,
    alignSelf: 'center',
  },
});
