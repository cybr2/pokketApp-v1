import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './HomePage';
import FeaturedPage from './FeaturedPage';
import DetailedPage from './DetailedPage';
import { NavigationContainer, DarkTheme, DefaultTheme} from '@react-navigation/native';
import { themeStore } from '../stores/store';
import BtnThemeMode from '../components/BtnThemeMode';

const MainStack = createStackNavigator();

const NavigationPage = () => {
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
        <View className=' justify-end absolute z-40 right-2'> 
          <BtnThemeMode/>
        </View>
        <MainStack.Navigator>
            <MainStack.Screen 
                name='Main' 
                component={HomePage}
                options={{
                    headerShown: false,
                    title : '',
                }} 
            />
            <MainStack.Screen 
              name='Featured' 
              component={FeaturedPage}
              options={{
                    // headerShown: false,
                    title : '',
                }}
            />
            <MainStack.Screen name='Detailed' component={DetailedPage}/>
        </MainStack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationPage

const styles = StyleSheet.create({})