import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import FeaturedCard from '../components/FeaturedCard';
import { itemStore } from '../stores/store';
import { fetchData } from '../utils/helper';

const ItemsScreen = () => {
  const { itemData, setItemData } = itemStore();
  const [page, setPage] = useState(0);
  const limit = 30;
  const url = 'https://pokeapi.co/api/v2/item';

  const handleDataFetch = async () => {
    try {
      const items = await fetchData(url,limit,page);
      if (items && items.data && items.data.results) {
        const newData = items.data.results;
        setPage(page + 1);
        setItemData(newData); // Add new data to existing data
      }
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  };

  useEffect(() => {
    handleDataFetch
  }, []); // Fetch initial data
  
  const renderItem =({ item }) => <FeaturedCard name={item.name} link={item.url} />
  
  return (
    <FlatList
      data={itemData}
      renderItem={renderItem}
      keyExtractor={(item, index) => `${item.name}-${index}`} 
      numColumns={2}
      contentContainerStyle={styles.container}
      onEndReached={handleDataFetch}
      onEndReachedThreshold={0.5}
      extraData={itemData}
    />
  );
};

export default ItemsScreen;


const styles = StyleSheet.create({
  container : {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  card: {
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
})