import {StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react'
import { themeStore } from '../stores/store';
import SearchBar from '../components/SearchBar';



const FavoriteScreen = () => {
  const {darkMode } = themeStore()

  const containerStyles = darkMode
  ? 'flex-1  bg-[#272727] text-white px-8 mt-20'
  : 'flex-1  bg-white text-black px-8 mt-20';

  const textStyles = darkMode ? 'text-white' : 'text-black';


  return (
    <View className={containerStyles}>
      <View className='mt-2'>
        <SearchBar/>
      </View>
    </View>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({
  container:{
    alignItems : 'center',
  },
  title:{
    color : 'white'
  }
})