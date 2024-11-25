import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IMG } from '../assets/images/image'

const Header = () => {
  return (
    <View>
        <Text>yes yamaha</Text>
        <View >
            {/* <Image source={IMG.appIcon } /> */}
        </View>
        <View>
            {/* <Image source={require(IMG.appIcon)}/> */}
        </View>  
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    // appIcon:{
    //     height:25,
    //     width:25

    // },
    appIconContainer:{
        height:25,
        width:25

    },
})