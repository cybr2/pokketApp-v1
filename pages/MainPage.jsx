import { StyleSheet, Text, View } from 'react-native'
import React,{ useEffect } from 'react'
import SplashScreen from '../screens/SplashScreen'
import { loadingStore } from '../stores/store'
import HomePage from './HomePage'

const MainPage = () => {
  const { isLoading} = loadingStore();

  return (
    <View>
    {isLoading ? <SplashScreen/> : <HomePage/>}
    </View>
  )
}

export default MainPage

const styles = StyleSheet.create({})
