import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const BtnBaseItem = ({...props}) => {
  const navigation = useNavigation()
  const color = props.color
  let col = '';
    if(color === 'orange'){
      col =  'bg-orange-500'
    }
    if(color === 'blue'){
      col =  'bg-blue-500'
    }
    if(color === 'yellow'){
      col =  'bg-yellow-500'
    }
    if(color === 'violet'){
      col =  'bg-violet-500'
    }
  return (
    <TouchableOpacity 
      className={`${col} flex h-[100px] w-[48%] rounded-xl justify-end p-4`}
      onPress={() => navigation.navigate(props.link,{ screen: props.screen })}
    >
        <Text className=' text-xl font-bold color-white'>
            {props.name}
        </Text>
    </TouchableOpacity>
  )
}

export default BtnBaseItem

const styles = StyleSheet.create({})