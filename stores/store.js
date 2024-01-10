import { create } from 'zustand'

const loadingStore = create((set) => ({
    isLoading : true,
    setIsLoading : (item) => set(() => ({ isLoading : item})),
  }));

const loopStore = create((set) => ({
  isLoop : true,
  setIsLoop : (item) => set(() => ({ isLoop : item})),
}));

const progressStore = create((set) => ({
  progress: 0,
  setProgress: (progressIncrement) => {
    set((state) => ({
      progress: Math.min(Math.max(state.progress + progressIncrement, 0), 1),
    }));
  },
}));

const themeStore = create((set)=>({
  darkMode : false,
  setDarkMode : () => set((state)=>({darkMode : !state.darkMode}))
}));

const  themeModeStore = create((set)=> ({
  theme: {
    light: {
      theme: 'light',
      color: 'black',
      background: 'white',
    },
    dark: {
      theme: 'dark',
      color: 'white',
      background: 'black',
    },
  },
}));

const pokemonStore = create((set) =>({
  pokeData : [],
  setPokeData : (newData) => set((state) => ({ pokeData : [...state.pokeData, ...newData]
  })),
}));

const itemStore = create((set) =>({
  itemData : [],
  setItemData: (newData) =>
    set((state) => ({
      itemData: [...state.itemData, ...newData]
    })),
}));

const itemDetailStore = create((set) =>({
  asset : [],
  setAsset :  (newAsset) => set(() => ({ asset : newAsset}))
}));

const imageStore = create ((set) => ({
  imgUrl : null,
  setImgUrl : (newUrl) => set(() => ({ imgUrl : newUrl}))
}))

const typeStore = create ((set) => ({
  typeData : [],
  setTypeData : (newData) => set((state) => ({
    typeData : [...state.typeData, ...newData]
  }))
}))


export {
    loadingStore,
    loopStore,
    progressStore,
    themeStore,
    themeModeStore,
    pokemonStore,
    itemStore,
    itemDetailStore,
    imageStore,
    typeStore
}