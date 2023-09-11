import { StyleSheet, Text, View, Linking, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome6'




const YtDsa = () => {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.textCourseStyle}>DSA On YouTube <Icon name="caret-down" size={20} /></Text>
      <Text style={styles.descCourseStyle} >Some of the best Dsa Tutorial on the Youtube</Text>

      <ScrollView>

        <View style={styles.mainCardYt}>
            <View style={styles.cardImage}>
                <Image style={styles.cardImageDp}
                source={require('../images/loveBabbar.png')}/>
            </View>
            <View style={styles.cardNameDesc}>
                <Text style={styles.teacherName}>Love Babbar</Text>
                <Text style={styles.subject}>DSA With C++</Text>
            </View>
            <TouchableOpacity onPress={() => openWebsite('https://youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&si=uNhJc-o0XVPtVTdV')} style={styles.cardButtonYt}>
                <Icon style={styles.iconArrow} name="arrow-right" size={50} /> 
            </TouchableOpacity>
        </View>
        
        <View style={styles.mainCardYt}>
            <View style={styles.cardImage}>
                <Image style={styles.cardImageDp}
                source={require('../images/kunalK.png')}/>
            </View>
            <View style={styles.cardNameDesc}>
                <Text style={styles.teacherName}>Kunal K.</Text>
                <Text style={styles.subject}>DSA With Java  </Text>
            </View>
            <TouchableOpacity onPress={() => openWebsite('https://youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&si=90_DiU_7yIcGWFiE')} style={styles.cardButtonYt}>
                <Icon style={styles.iconArrow} name="arrow-right" size={50} /> 
            </TouchableOpacity>
        </View>
         
        <View style={styles.mainCardYt}>
            <View style={styles.cardImage}>
                <Image style={styles.cardImageDp}
                source={require('../images/jenny.png')}/>
            </View>
            <View style={styles.cardNameDesc}>
                <Text style={styles.teacherName}>Jenny's Lecture</Text>
                <Text style={styles.subject}>DSA</Text>
            </View>
            <TouchableOpacity onPress={() => openWebsite('https://youtube.com/playlist?list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU&si=lPn0xMNCwIe3cWw9')} style={styles.cardButtonYt}>
                <Icon style={styles.iconArrow} name="arrow-right" size={50} /> 
            </TouchableOpacity>
        </View>

        <View style={styles.mainCardYt}>
            <View style={styles.cardImage}>
                <Image style={styles.cardImageDp}
                source={require('../images/freecodecamp.png')}/>
            </View>
            <View style={styles.cardNameDesc}>
                <Text style={styles.teacherName}>FreeCodeCamp</Text>
                <Text style={styles.subject}>DSA With Python</Text>
            </View>
            <TouchableOpacity onPress={() => openWebsite('https://youtu.be/pkYVOmU3MgA?si=LvXJ7rdIP1slYMTB')} style={styles.cardButtonYt}>
                <Icon style={styles.iconArrow} name="arrow-right" size={50} /> 
            </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  )
}

export default YtDsa

const styles = StyleSheet.create({
    textCourseStyle:{
        color: 'black',
        fontSize: 20,
        fontWeight: '700',
        marginLeft: 25,
        marginTop: 25,
    },
    descCourseStyle:{
        fontSize: 15,
        textAlign:'center',
        marginTop: 10,
        fontWeight: '500',
    },
    mainCardYt:{
        flex: 1,
        flexDirection: 'row',
        height: 100,
        width: '88%',
        backgroundColor: 'white',
        margin: 20,
        borderRadius: 15,
    },
    cardImage:{ 
        // backgroundColor: 'black',
        borderRadius: 15,
    },
    cardImageDp:{
        height: 80,
        width: 80,
        borderRadius: 100,
        marginLeft: 10,
        marginTop: 10,
    },
    cardNameDesc:{
        // backgroundColor: 'blue',
        marginLeft: 15,
        width: '50%',
    },
    cardButtonYt:{
     backgroundColor: '#005DCA',
     marginLeft: 10,
     width: 66,
     alignItems: 'center',
     borderTopRightRadius: 15,
     borderBottomRightRadius: 15,
    },
    teacherName:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 20,
    },
    subject:{
        fontSize: 20,
        fontWeight: '600',
        color: 'black',
    },
    iconArrow:{
        flex: 1,
        marginTop: 20,
    },
})