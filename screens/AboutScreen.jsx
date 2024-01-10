import {StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react'
import { themeStore } from '../stores/store';



const AboutScreen = () => {
  const {darkMode } = themeStore()

  const containerStyles = darkMode
  ? 'flex-1  bg-[#272727] text-white px-8 mt-20'
  : 'flex-1  bg-white text-black px-8 mt-20';

  const textStyles = darkMode ? 'text-white' : 'text-black';


  return (
    <View className={containerStyles}>
      <ScrollView>
        <Text className={`${textStyles} text-lg font-bold mb-2 text-center mt-10 `}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus nulla assumenda quisquam voluptatum excepturi, quos, nobis dignissimos labore, ab pariatur ipsam at explicabo voluptate. Sint optio consequatur dolorum suscipit rerum?
          Quibusdam animi eligendi ab nulla culpa placeat cupiditate veritatis aliquam aut, vero facere vitae, dolorem eius veniam natus voluptatibus, ex minima sequi totam quod atque ducimus blanditiis accusantium? Iste, distinctio!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus nulla assumenda quisquam voluptatum excepturi, quos, nobis dignissimos labore, ab pariatur ipsam at explicabo voluptate. Sint optio consequatur dolorum suscipit rerum?
          Quibusdam animi eligendi ab nulla culpa placeat cupiditate veritatis aliquam aut, vero facere vitae, dolorem eius veniam natus voluptatibus, ex minima sequi totam quod atque ducimus blanditiis accusantium? Iste, distinctio!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus nulla assumenda quisquam voluptatum excepturi, quos, nobis dignissimos labore, ab pariatur ipsam at explicabo voluptate. Sint optio consequatur dolorum suscipit rerum?
          Quibusdam animi eligendi ab nulla culpa placeat cupiditate veritatis aliquam aut, vero facere vitae, dolorem eius veniam natus voluptatibus, ex minima sequi totam quod atque ducimus blanditiis accusantium? Iste, distinctio!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus nulla assumenda quisquam voluptatum excepturi, quos, nobis dignissimos labore, ab pariatur ipsam at explicabo voluptate. Sint optio consequatur dolorum suscipit rerum?
          Quibusdam animi eligendi ab nulla culpa placeat cupiditate veritatis aliquam aut, vero facere vitae, dolorem eius veniam natus voluptatibus, ex minima sequi totam quod atque ducimus blanditiis accusantium? Iste, distinctio!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus nulla assumenda quisquam voluptatum excepturi, quos, nobis dignissimos labore, ab pariatur ipsam at explicabo voluptate. Sint optio consequatur dolorum suscipit rerum?
          Quibusdam animi eligendi ab nulla culpa placeat cupiditate veritatis aliquam aut, vero facere vitae, dolorem eius veniam natus voluptatibus, ex minima sequi totam quod atque ducimus blanditiis accusantium? Iste, distinctio!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus nulla assumenda quisquam voluptatum excepturi, quos, nobis dignissimos labore, ab pariatur ipsam at explicabo voluptate. Sint optio consequatur dolorum suscipit rerum?
          Quibusdam animi eligendi ab nulla culpa placeat cupiditate veritatis aliquam aut, vero facere vitae, dolorem eius veniam natus voluptatibus, ex minima sequi totam quod atque ducimus blanditiis accusantium? Iste, distinctio!
        </Text>
      </ScrollView>

    </View>
  )
}

export default AboutScreen

const styles = StyleSheet.create({
  container:{
    alignItems : 'center',
  },
  title:{
    color : 'white'
  }
})