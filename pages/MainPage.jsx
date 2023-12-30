import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SplashScreen from '../screens/SplashScreen'
import { loadingStore, themeStore } from '../stores/store'
import HomePage from './HomePage'
import { light, dark } from '../theme/theme'

const MainPage = () => {
  const { isLoading} = loadingStore();
  const { darkMode } = themeStore();

  let theme = (darkMode === true) ? dark : light;

  return (
    <View className ={`${theme} h-screen w-screen`}>
      {isLoading ? <SplashScreen/> : <HomePage/>}
    </View>  
  )
}

export default MainPage

