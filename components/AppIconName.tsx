import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AppIconName = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.designAppIcon} source={require('../images/appIcon.png')}/>
      </View>
      <View>
      <Image style={styles.designAppName} source={require('../images/appName.png')}/>
      </View>
    </View>
  )
}

export default AppIconName

const styles = StyleSheet.create({
    container:{
        // flex: 1,
        flexDirection: 'row',
        height: 100,
        width: '90%',
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',

    },
    designAppIcon:{
        height: 100,
        width: 100,
    },
    designAppName:{
        height: 100,
        width: 100,
    },
})