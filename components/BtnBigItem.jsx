import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'



const BtnBigItem = ({...props}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity 
      className='flex bg-green-500 h-[100px] w-full rounded-xl justify-end p-4'
      onPress={() => navigation.navigate(props.link,{ screen: props.screen })}
    >
        <Text className=' text-xl font-bold color-white '>
            {props.name}
        </Text>
    </TouchableOpacity>
  )
}

export default BtnBigItem

const styles = StyleSheet.create({})