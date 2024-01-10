import { StyleSheet, Text, View } from 'react-native';
import React,{ useState, useEffect} from 'react'
import { themeStore } from '../stores/store';
import SearchBar from '../components/SearchBar';
import BtnBigItem from '../components/BtnBigItem';
import BtnBaseItem from '../components/BtnBaseItem';


const HomeScreen = () => {
  const {darkMode } = themeStore();

  const containerStyles = darkMode
  ? `flex flex-1  bg-[#272727] text-white px-8 mt-20`
  : 'flex flex-1  bg-white text-black px-8 mt-20';


  const textStyles = darkMode ? 'text-white' : 'text-black';

  


  return ( 
        <View className={containerStyles}>
          <View>
            <Text className={`${textStyles} text-5xl font-bold mb-2 `}>Ready to </Text>
            <Text className={`${textStyles} text-5xl font-bold`}>catch'em all?</Text>
          </View>
          <View className='mt-2'>
            <SearchBar/>
          </View>
          <View className='mt-12'>
            <BtnBigItem name='Pokemon' link='Featured' screen='pokemons'/>
          </View>
          <View className='flex mt-5'>
            <View className='flex flex-row justify-between'>
              <BtnBaseItem name='Items' color='orange' link='Featured' screen='items'/>
              <BtnBaseItem name='Types' color='blue' link='Featured' screen='types'/>
            </View>
            <View className='mt-5 flex flex-row justify-between'>
              <BtnBaseItem name='Badges' color='yellow' link='Featured' screen='badges'/>
              <BtnBaseItem name='Region' color='violet' link='Featured' screen='regions'/>
            </View>
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