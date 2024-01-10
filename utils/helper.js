import { itemStore, pageStore } from "../stores/store"
import axios from "axios";

const getItemDetails = async (name) => {
    const { itemData } = itemStore();
    try {
        if(!item) return null
        const item = itemData.find((item) => item.name === name);
    } catch (error) {
        throw new Error('failed to fetch item details');
    }
}

const getItemSprite = (details) => {
    try {
        const featured = details.find((detail) => detail)
    } catch (error) {
        
    }
    (details || details.sprites || details.sprites.default) ? details.sprite.default : null;
}

const fetchData = async (url,limit,page) => {
    try {
      const response = await axios.get(`${url}/?limit=${limit}&offset=${page * limit}`);
      return response;
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  };


export {
    getItemDetails,
    fetchData,
}