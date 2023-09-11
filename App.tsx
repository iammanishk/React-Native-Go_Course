import { ImageBackground, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppIconName from './components/AppIconName'
import Courses from './components/Courses'
import YtDsa from './components/YtDsa'

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={'white'}/>
      <ScrollView>
      <ImageBackground style={styles.mainBackground} source={require('./images/bg_1.png')}/>
      <AppIconName />
      <Courses />
      <YtDsa />
      </ScrollView>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor: '#91D3FF',
    height:"100%",
  },
  mainBackground:{
    height: '88%',
    width: '100%',
    position: 'absolute',
  },
  
})