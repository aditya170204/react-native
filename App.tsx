import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text} from 'react-native';
import HomeScreen from './src/screen/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CartScreen from './src/screen/CartScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CartProvider} from './src/context/cartContext';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function Home() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
const MyHomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HOME" component={HomeScreen} />
    </Stack.Navigator>
  );
};
function Cart() {
  return (
    <View>
      <Text>Cart</Text>
    </View>
  );
}
const MyCartStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="CART" component={CartScreen} />
    </Stack.Navigator>
  );
};
function Profile() {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
}
const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: 'white',
            tabBarActiveBackgroundColor: '#006C67',
          }}>
          <Tab.Screen
            name="HOME_STACK"
            component={MyHomeStack}
            options={{
              tabBarIcon: ({color, focused, size}) => {
                return <Entypo name={'home'} size={25} />;
              },
            }}
          />
          <Tab.Screen
            name="CART_STACK"
            component={MyCartStack}
            options={{
              tabBarIcon: ({color, focused, size}) => {
                return <FontAwesome5 name={'shopping-cart'} size={25} />;
              },
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarIcon: ({color, focused, size}) => {
                return <MaterialCommunityIcons name={'account'} size={30} />;
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;
