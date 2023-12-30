import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AboutScreen from '../screens/AboutScreen';
import HomeScreen from '../screens/HomeScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import { AboutIcon, HomeIcon, FavIcon } from '../assets/png';
import BtnNavIcon from '../components/BtnNavIcon';
import { themeStore } from '../stores/store';
import { light, dark } from '../theme/theme'


const Tab = createBottomTabNavigator();



const HomePage = () => {
  const { darkMode } = themeStore()

  const customLightTheme = {
    ...DefaultTheme, 
    colors: {
      ...DefaultTheme.colors,
      primary: 'blue', 
      background: 'white',
      text: 'black',
      border: 'transparent',
      card: 'white',
    },
  };

  const customDarkTheme = {
    ...DarkTheme, 
    colors: {
      ...DarkTheme.colors,
      primary: 'cyan',
      background: '#272727',
      text: 'white',
      border: 'transparent',
      card: '#272727',
    },
  };
         
  const selectedTheme = darkMode ? customDarkTheme : customLightTheme;
  return (
    <NavigationContainer theme={selectedTheme}>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
          tabBarStyle: styles.bottomNav ,
          
        }}
      >
        <Tab.Screen 
          name='About' 
          component={AboutScreen} 
          options={{
            title : '',
            tabBarIcon : () => (
              <BtnNavIcon height={30} width={30} src={AboutIcon}/>
            )
          }}
        />
        <Tab.Screen 
          name='Home' 
          component={HomeScreen} 
          options={{
            title : '',
            tabBarIcon : () => (
              <BtnNavIcon height={35} width={35} src={HomeIcon}/>
            )
          }}
        />
        <Tab.Screen 
          name='Favorite' 
          component={FavoriteScreen} 
          options={{
            title : '',
            tabBarIcon : () => (
              <BtnNavIcon height={30} width={30} src={FavIcon}/>
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection: 'column',
    gap: 100,
    height : '100%',
    width : '100%',
    backgroundColor: 'black'
  },
  bottomNav: {
    paddingTop: 20, 
    height: 80, 
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50 , 
    backgroundColor: '#D9D9D9'
  }
})