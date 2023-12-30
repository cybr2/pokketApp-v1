import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { HomeIcon } from '../assets/png'


const BtnNavIcon = ({...props}) => {
  const styles = StyleSheet.create({
    tinyIcon:{
        width: props.width,
        height: props.height,
        objectFit: 'contain',
    }
})
  return (
    <Image 
        style={styles.tinyIcon}
        source={props.src}/>
  )
}

export default BtnNavIcon

