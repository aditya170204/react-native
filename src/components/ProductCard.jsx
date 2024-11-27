import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const ProductCard = ({item , handleLiked}) => {
    // const isLiked=true;
    // const [isLiked, SetIsLIked] = useState(false);
    
  return (
    <View style={styles.container}>
      <Image   source={{uri:item.imageUrl}}
         style={styles.imagestyle}/>

        <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.price}>{item.details}</Text>
        </View>
        <TouchableOpacity onPress = {() => {handleLiked(item);

        }} style={styles.heartContainer}>
            {
                !item?.isLiked?(<AntDesign name='heart' size={20} color={'#FF6666'} />)
                 : (<AntDesign name='hearto' size={20} color={'#FF6666'} />)
            }
        </TouchableOpacity>
      


      
    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:10,
        position:"relative"
    },
    imagestyle:{
        height:200,
        width:187,
        borderRadius:15,
        marginHorizontal:5,
        marginVertical:10
    },
    title:{
        fontSize:18,
        fontWeight:600,
        marginHorizontal:13,
    },
    price:{
        color:"#9C9C9C",
        fontSize:18,
        fontWeight:600,
        marginHorizontal:13,
    },
    content:{
        paddingLeft:10,
        paddingBottom:20
    },
    heartContainer:{
        height:34,
        width:34,
        borderRadius:50,
        backgroundColor:"#FFFFFF",
        justifyContent:"center",
        alignItems:"center",
        position:"absolute",
        top:20,
        right:20    

    }
})