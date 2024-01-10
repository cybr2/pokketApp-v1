import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import PokemonsScreen from '../screens/PokemonsScreen';
import TypesScreen from '../screens/TypesScreen';
import ItemsScreen from '../screens/ItemsScreen';
import BadgesScreen from '../screens/BadgesScreen';
import RegionsScreen from '../screens/RegionsScreen';
import { PokemonIcon, ItemIcon, TypeIcon, BadgeIcon, RegionIcon} from '../assets/png';
import BtnNavIcon from '../components/BtnNavIcon';

const FeaturedTab = createBottomTabNavigator();

const FeaturedPage = () => {
  return (
    <FeaturedTab.Navigator
      screenOptions={{
          tabBarStyle: styles.bottomNav , 
      }}
    >
    <FeaturedTab.Screen 
        name='types' 
        component={TypesScreen}
        options={{
            headerShown: false,
            title : '',
            tabBarIcon : ()=> <BtnNavIcon height={40} width={40} src={TypeIcon} />
          }}
      />
      <FeaturedTab.Screen 
        name='items' 
        component={ItemsScreen}
        options={{
            headerShown: false,
            title : '',
            tabBarIcon : ()=> <BtnNavIcon height={30} width={30} src={ItemIcon} />
          }}
      />

      <FeaturedTab.Screen 
        name='pokemons' 
        component={PokemonsScreen}
        options={{
            headerShown: false,
            title : '',
            tabBarIcon : ()=> <BtnNavIcon height={40} width={40} src={PokemonIcon} />
          }}
      />
      <FeaturedTab.Screen 
        name='badges' 
        component={BadgesScreen}
        options={{
            headerShown: false,
            title : '',
            tabBarIcon : ()=> <BtnNavIcon height={35} width={35} src={BadgeIcon} />
          }}
      />
      <FeaturedTab.Screen 
        name='regions' 
        component={RegionsScreen} 
        options={{
            headerShown: false,
            title : '',
            tabBarIcon : ()=> <BtnNavIcon height={35} width={35} src={RegionIcon} />
          }}
      />
    </FeaturedTab.Navigator>
  )
}

export default FeaturedPage

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
    backgroundColor: '#f4f2f0'
  }
})