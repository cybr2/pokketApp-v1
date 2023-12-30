import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LoadingIcon from '../components/LoadingIcon';
import ProgressBar from '../components/ProgressBar';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
        <LoadingIcon/>
        <ProgressBar/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container:{
    width: '100vw',
    flex: 1,
    flexDirection: 'col',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    gap: 100,
    backgroundColor : 'white'
  },
})