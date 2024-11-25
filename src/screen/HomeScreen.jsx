import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import LinearGradient from 'react-native-linear-gradient';
// import Header from '../components/Header';
import Category from '../components/Category';
const categories = ['Fresh ones', 'New', 'All']
const HomeScreen = () => {
  const [SelectedCategory,setSelectedCategory] = useState(null)
  return (
    <LinearGradient colors={['#6FCCC8', '#FFFFFF']} style={styles.container}>
        <View>
          <Text>
            eat healthy stay healthy
          </Text>
        </View>
        {/* <Header /> */}
        <Text style={styles.EatHEalthy}>Eat Healthy</Text>
        <View style={styles.searchInput}>
          <View style={styles.searchIcon} >
           <EvilIcons name='search' size={35} color={"#C0C0C0"} />
          </View>
           <TextInput style={styles.textInput}/>
        </View>
        <FlatList
         data={categories} 
         renderItem={({item})=>< Category item={item} SelectedCategory={SelectedCategory}setSelectedCategory={setSelectedCategory}/>}
         keyExtractor={(item)=>{item}}
          horizontal={true}
           showsHorizontalScrollIndicator={false}/>
      {/* <Category /> */}
    </LinearGradient>
    
  );
};

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  EatHEalthy:{
    fontSize:25,
    marginTop:40,
    marginLeft:40,
    fontWeight:"bold" 
  },
  searchInput:{
    margin:20,
    backgroundColor:"#ffffff",
    height:50,
    borderRadius:25,
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row"
  },
  textInput:{
      flex:1
  },
  searchIcon:{
    marginLeft:10,
    marginBottom:6
  
  }
})