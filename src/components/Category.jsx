import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Category = ({item,SelectedCategory,setSelectedCategory}) => {
  return (
    <View>
      <Text style={styles.Categoryfresh}>{item}</Text>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({
    Categoryfresh:{
        fontSize:18,
        fontWeight:"600",
        margin:20,
        backgroundColor:"#32A7A1",
        color:"white",
        borderRadius:8,
        paddingVertical:10,
        textAlign:'center',
        marginHorizontal:20,
        paddingHorizontal:10
        
        

        

    }
})