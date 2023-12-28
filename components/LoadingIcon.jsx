import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState} from 'react';
import LottieView from 'lottie-react-native';
import { loadingStore, loopStore, progressStore } from '../stores/store';

const LoadingIcon = () => {
  const { setIsLoading } = loadingStore();
  const { isLoop } = loopStore();


  return (
      <LottieView
        source={require('../assets/pika.json')}
        autoPlay
        loop={isLoop}
        resizeMode='contain'
        onAnimationFinish={() => setIsLoading(false)}
        style={styles.imgView}
      />
  )
}

export default LoadingIcon

const styles = StyleSheet.create({
  imgView : {
    width : 200,
  }
})