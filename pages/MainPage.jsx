import { View } from 'react-native'
import React from 'react'
import SplashScreen from '../screens/SplashScreen'
import { loadingStore, themeStore } from '../stores/store'
import HomePage from './HomePage'
import { light, dark } from '../theme/theme'
import NavigationPage from './NavigationPage'

const MainPage = () => {
  const { isLoading} = loadingStore();
  const { darkMode } = themeStore();

  let theme = (darkMode === true) ? dark : light;

  return (
    <View className ={`${theme} h-screen w-screen`}>
      {isLoading ? <SplashScreen/> : <NavigationPage/>}
    </View>  
  )
}

export default MainPage

