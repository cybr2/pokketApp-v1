import { StyleSheet, Text, View, Switch } from 'react-native'
import React from 'react'
import { themeStore } from '../stores/store';

const BtnThemeMode = () => {
  const { darkMode, setDarkMode} = themeStore();

  console.log(darkMode)

  return (
    <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={darkMode ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={setDarkMode}
        value={darkMode}
      />
  )
}

export default BtnThemeMode

const styles = StyleSheet.create({})