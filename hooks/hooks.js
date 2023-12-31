import { useEffect } from 'react';
import { loadingStore, loopStore, progressStore, themeStore } from '../stores/store';
import { EventRegister } from 'react-native-event-listeners';

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

export {
    useSplashScreen,
    useProgressBar,
    useThemeMode
}