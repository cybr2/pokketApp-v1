import { create } from 'zustand'

const loadingStore = create((set) => ({
    isLoading : true,
    setIsLoading : (item) => set(() => ({ isLoading : item})),
  }))

const loopStore = create((set) => ({
  isLoop : true,
  setIsLoop : (item) => set(() => ({ isLoop : item})),
}))

const progressStore = create((set) => ({
  progress: 0,
  setProgress: (progressIncrement) => {
    set((state) => ({
      progress: Math.min(Math.max(state.progress + progressIncrement, 0), 1),
    }));
  },
}));


export {
    loadingStore,
    loopStore,
    progressStore,
}