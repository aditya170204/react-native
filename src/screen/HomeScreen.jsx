import { FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import Category from '../components/Category';
import ProductCard from '../components/ProductCard';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import data from '../data/data.json'
const categories = ['All', 'New', 'Fresh ones', 'Baked items','Beverages']
const HomeScreen = () => {
  const [products, setProducts] =useState(data.products);
  const [SelectedCategory,setSelectedCategory] = useState('All')
  const [isLiked,SetIsLIked] = useState(false)
  const handleLiked = (item)=>{
    const newProduct = products.map((prod)=>{
      if (prod.id===item.id) {
        return{
          ...prod,
          isLiked:true
        }
      }
      return prod;
    })
    setProducts(newProduct)
  }
  return (
    <LinearGradient colors={['#6FCCC8', '#FFFFFF']} style={styles.container}>
        <View>
          <Text>
            eat healthy stay healthy
          </Text>
        </View>
        
        <Header />
        <Text style={styles.EatHEalthy}>Eat Healthy</Text>
        <View style={styles.searchInput}>
          <View style={styles.searchIcon} >
           <EvilIcons name='search' size={35} color={"#C0C0C0"} />
          </View>
           <TextInput style={styles.textInput}/>
        </View>
        
        <FlatList numColumns={2}
         data={products}
         ListHeaderComponent={
          <>
          <FlatList
         data={categories} 
         renderItem={({item})=>< Category item={item} SelectedCategory={SelectedCategory}setSelectedCategory={setSelectedCategory}/>}
         keyExtractor={(item)=>{item}}
          horizontal={true}
           showsHorizontalScrollIndicator={false}/>
      {/* <Category /> */}
      
        <View style={{flexDirection:"row"}}>
            {/* <ProductCard />
            <ProductCard /> */}
        </View>
          </>
         }
          renderItem={({item,index})=> <ProductCard item={item} handleLiked={handleLiked} />}
          showsVerticalScrollIndicator = {false}
          contentContainerStyle ={{
            paddingBottom:200
          }}
          />
        {/* <View style={{flexDirection:"row"}}>
            <ProductCard />
            <ProductCard />
        </View>
        <View style={{flexDirection:"row"}}>
            <ProductCard />
            <ProductCard />
        </View> */}
        
    </LinearGradient>
    
  );
};

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    // flex:1,
    padding:10,
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
  
  },
  ProductCardContainer:{
    // flexDirection:'row'
  }
})