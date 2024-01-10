import { useEffect } from 'react';
import { imageStore, itemStore, loadingStore, loopStore, pageStore, pokemonStore, progressStore, themeStore } from '../stores/store';
import { EventRegister } from 'react-native-event-listeners';
import axios from 'axios';
import { getItemDetails } from '../utils/helper';

const useSplashScreen = () => {
    const { isProgress, setIsProgress } = progressStore();
    const { setIsLoop } = loopStore();
    const { setIsLoading } = loadingStore();
    
    useEffect(() => {
        console.log('Progress will be logged from 0 to 1');
        const interval = setInterval(() => {
            if (isProgress <= 10) {
                setIsProgress(prevProgress => {
                    const newProgress = prevProgress + 1;
                    console.log('Progress:', newProgress);
                    return newProgress;
                });
            } else {
                clearInterval(interval);
                setIsLoop(false);
                setIsLoading(false);
                console.log('Progress reached 1');
            }
        }, 100);
        return () => clearInterval(interval);
    }, [isProgress, setIsProgress, setIsLoading, setIsLoop]);
};

const useProgressBar = ( progressIncrement,intervalTime ) => {
    const { progress, setProgress } = progressStore();
    const { setIsLoop } = loopStore();
    useEffect(()=>{
        const interval = setInterval(() => {
          ( progress < 1 ) ? ( setProgress(progressIncrement) ) : ( clearInterval(interval), setIsLoop(false)  )
        }, intervalTime);
        return ()=>clearInterval(interval);
      },[progress, setProgress]);
}

const useThemeMode = () => {
    const { darkMode, setDarkMode } = themeStore();

    useEffect(()=>{
        const listener = EventRegister.addEventListener('ChangeTheme', (data)=>{
            setDarkMode(data)
            console.log(data)
        })
        return ()=> EventRegister.removeAllListeners(listener)
    },[darkMode])
}

const useFetchDataAll = async () => {
    const { setPokeData } = pokemonStore()
    const num = 150;
    const baseUrL = `https://pokeapi.co/api/v2/pokemon/?limit=${num}&offset=${num}`
    
    try {
        axios.get(baseUrL)
        .then((response) => {
          console.log(response.data)
        })
    } catch (error) {
        console.log(error)
    }
}

//fetched data for featuredPage
const useFetchData = async (limit,url) => {
    const { setItemData } = itemStore();
    const { page } = pageStore();
    try {
        const response = await axios.get(`${url}?limit=${limit}&offset=${page *limit}`);
        (response && response.data && response.data.results) ? (
                setItemData(response.data.results),
                setPage(page + 1)
            ) :  console.log('response error check your url link')
    } catch (error) {
        console.log(error)
    }
}
//fetched source asset for featuredPage
const useFetchScrSet = async (name) => {
    const { itemData } = itemStore();
    const { setImgUrl } = imageStore();
        try {
          const item = itemData.find((item) => item.name === name);
      
          if (!item) {
            return null; // Consider handling this case more explicitly
          }
      
          const response =await axios.get(item.url);
          const data = response.data;
      
          if (item.url.includes('item')) {
            if (data || data.sprites || data.sprites.default) {
              setImgUrl(data.sprites.default);
            }
          } else if (item.url.includes('pokemon')) {
            if (
              data ||
              data.sprites ||
              data.sprites.other ||
              data.sprites.other.official-artwork ||
              data.sprites.other.official-artwork.front_default
            ) {
              setImgUrl(data.sprites.other.official-artwork.front_default);
            }
          } else {
            console.log('Wala');
          }
        } catch (error) {
          console.error('Error fetching data:', error.message);
          throw new Error('URL asset error');
        }
};

export {
    useSplashScreen,
    useProgressBar,
    useThemeMode,
    useFetchDataAll,
    useFetchData,
    useFetchScrSet,

}