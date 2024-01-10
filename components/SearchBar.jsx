import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React,{ useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const allData = {
    users : [
        {
            name : 'CHAN',
            age : '1'
        },
        {
            name : 'SHEN',
            age : '2'
        },{
            name : 'GWEN',
            age : '3'
        }
        
    ],
    files : [
        {
            title : 'FRANCE',
            subtitle : '4'
        },
        {
            title : 'CANADA',
            subtitle : '5'
        },{
            title : 'CHINA',
            subtitle : '6'
        }
        
    ]     
}

const SearchBar = () => {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(allData)

    const handleSearch = (text) => {
        const query = text.toLowerCase();

        const filteredUsers = allData.users.filter((user) => {
            user.name.toLowerCase().includes(query)
        });

        const filteredFiles = allData.files.filter((file) => {
            file.title.toLowerCase().includes(query)
        });

        setFilteredData([...filteredUsers, ...filteredFiles]);
        setSearchQuery(text);

    }

  

    const handleItemSelected = (item) => {
        if (item.hasOwnProperty('name')) {
            console.log('user:', item.name);
        } else if (item.hasOwnProperty('title')) {
            console.log('file:', item.title);
        }
    }

  return (
    <View className='bg-slate-200 rounded-full py-2 px-5'>
        <TextInput
            placeholder='Search....'
            value = { searchQuery }
            onChangeText={ handleSearch }
            className='text-black text-lg'
            autoCorrect={false}
            autoCapitalize='none'
        />
        <FlatList
            data={filteredData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleItemSelected(item)}>
                    <Text>{item.name || item.title}</Text>
                </TouchableOpacity>
            )}
        />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({})