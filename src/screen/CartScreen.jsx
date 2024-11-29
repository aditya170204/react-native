import {
  FlatList,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import CartCard from '../components/CartCard';

const CartScreen = () => {
  return (
    <LinearGradient colors={['#6FCCC8', '#FFFFFF']} style={styles.container}>
      <View style={styles.headerContainer}>
        <Header isCart={true} />
      </View>

      <View style={styles.contentContainer}>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          ListHeaderComponent={<></>}
          renderItem={CartCard}
          ListFooterComponent={
            <>
              <View style={styles.priceContainer}>
                <View style={styles.priceAndTitle}>
                  <Text style={styles.billText}>Total : </Text>
                  <Text style={styles.billText}>₹300.0</Text>
                </View>
                <View style={styles.priceAndTitle}>
                  <Text style={styles.billText}>Shipping : </Text>
                  <Text style={styles.billText}>₹00.0</Text>
                </View>
              </View>

              <View style={styles.divider} />
              <View style={styles.priceAndTitleBottom}>
                <Text style={styles.billText}>Grand total : </Text>
                <Text style={styles.totalBillText}>₹300.0</Text>
              </View>
              <TouchableOpacity
                style={[styles.checkoutContainer, {marginBottom: 150}]}>
                <Text style={styles.buttonText}>Checkout</Text>
              </TouchableOpacity>
            </>
          }
          showsVerticalScrollIndicator={false}
        />
      </View>
    </LinearGradient>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginBottom: 30,
    padding: 15,
  },
  contentContainer: {
    marginHorizontal: 20,
  },
  priceContainer: {},
  priceAndTitle: {
    width: '99%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  billText: {
    fontSize: 18,
    fontWeight: 600,
    color: '#5D5D5D',
    marginVertical: 10,
  },
  divider: {
    borderWidth: 1,
    borderColor: '#5D5D5D',
  },
  priceAndTitleBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingBottom: 30,
  },
  totalBillText: {
    fontSize: 18,
    fontWeight: 800,
    color: 'black',
  },
  checkoutContainer: {
    backgroundColor: '#6FCCC8',
    height: 50,
    width: '90%',
    marginHorizontal: 20,
    borderRadius: 20,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 30,
    color: '#006C67',
    marginStart: '33%',
    marginTop: 4,
  },
});
