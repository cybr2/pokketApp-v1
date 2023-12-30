import {StyleSheet, Text, View } from 'react-native';
import React from 'react'
import { themeModeStore, themeStore } from '../stores/store';
import BtnThemeMode from '../components/BtnThemeMode';


const HomeScreen = () => {
  const { theme } = themeModeStore();
  const {darkMode } = themeStore()

  const containerStyles = darkMode
  ? 'flex-1  bg-[#272727] text-white px-5'
  : 'flex-1  bg-white text-black px-5';

  const textStyles = darkMode ? 'text-white' : 'text-black';


  return (
    <View className={containerStyles}>
      <View className='items-end'>
        <BtnThemeMode/>
      </View>
      <View>
        <Text className={`${textStyles} text-5xl font-bold mb-2 `}>Ready to </Text>
        <Text className={`${textStyles} text-5xl font-bold`}>catch'em all?</Text>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    alignItems : 'center',
  },
  title:{
    color : 'white'
  }
})