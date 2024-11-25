import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, } from 'react-native';
import HomeScreen from './src/screen/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const Tab = createBottomTabNavigator();
function Home() {
    return (<View>
        <Text>Home</Text>
    </View>)   
}
function Cart() {
    return (<View>
        <Text>Cart</Text>
    </View>)   
}
function Profile() {
    return (<View>
        <Text>Profile</Text>
    </View>)   
}
const App = () => {
  return ( 
    <NavigationContainer>
        <Tab.Navigator 
        screenOptions={{
            headerShown: false, 
            tabBarShowLabel: false,
            tabBarActiveTintColor: 'white',
            tabBarActiveBackgroundColor:'#006C67'
        }}>
      <Tab.Screen name="Home" component={HomeScreen} 
      options={{tabBarIcon:({color,focused,size})=>{
        return <Entypo name={"home"} size = {25}/>
       }

      }}/>
      <Tab.Screen name="Cart" component={Cart} 
      options={{tabBarIcon:({color,focused,size})=>{
        return <FontAwesome5 name={"shopping-cart"} size = {25}/>
       }

      }}/>
      <Tab.Screen name="Profile" component={Profile} 
      options={{tabBarIcon:({color,focused,size})=>{
        return <MaterialCommunityIcons
        name={"account"} size = {30}/>
       }

      }}/>
    </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App