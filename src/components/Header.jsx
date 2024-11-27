import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {appleicon} from "../components/"

const Header = () => {
  return (
    <View>
        <View style={styles.appIconContainer}>
        <Image source={require('../assets/images/appIcon.png')}  style={styles.appIcon} />
        </View>
        <View>
            {/* <Image source={require(IMG.appIcon)}/> */}
        </View>  
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    appIcon:{
        height:50,
        width:50,
        borderRadius:17

    },
    appIconContainer:{
        height:50,
        width:50,
        position:"absolute",
        right:20,


    },
})