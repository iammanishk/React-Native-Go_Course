import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Courses = () => {

    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }

  return (
    <View>
      <Text style={styles.textCourseStyle}>Courses <Icon name="caret-down" size={18} /></Text>
      <ScrollView horizontal={true}>
        <View style={[styles.cardCourse]}>
            <Image style={styles.courseImagedesigne} source={require('../images/c++.png')} />
            <Text style={styles.textHeaderCourse}>C++</Text>
            <Text style={styles.textAuthorCourse}>By W3 School</Text>
            <TouchableOpacity style={styles.touchButton}
            onPress={() => {openWebsite('https://www.w3schools.com/cpp/default.asp')}}>
                <Text style={styles.touchableText}>Learn Here</Text>
            </TouchableOpacity>
        </View>
        <View style={[styles.cardCourse]}>
            <Image style={styles.courseImagedesigne} source={require('../images/cLang.png')} />
            <Text style={styles.textHeaderCourse}>C</Text>
            <Text style={styles.textAuthorCourse}>By W3 School</Text>
            <TouchableOpacity style={styles.touchButton}
            onPress={() => {openWebsite('https://www.w3schools.com/c/index.php')}}>
                <Text style={styles.touchableText}>Learn Here</Text>
            </TouchableOpacity>
        </View>
        <View style={[styles.cardCourse]}>
            <Image style={styles.courseImagedesigne} source={require('../images/java.png')} />
            <Text style={styles.textHeaderCourse}>Java</Text>
            <Text style={styles.textAuthorCourse}>By W3 School</Text>
            <TouchableOpacity style={styles.touchButton}
            onPress={() => {openWebsite('https://www.w3schools.com/java/default.asp')}}>
                <Text style={styles.touchableText}>Learn Here</Text>
            </TouchableOpacity>
        </View>
        <View style={[styles.cardCourse]}>
            <Image style={styles.courseImagedesigne} source={require('../images/python.png')} />
            <Text style={styles.textHeaderCourse}>Python</Text>
            <Text style={styles.textAuthorCourse}>By W3 School</Text>
            <TouchableOpacity style={styles.touchButton}
            onPress={() => {openWebsite('https://www.w3schools.com/python/default.asp')}}>
                <Text style={styles.touchableText}>Learn Here</Text>
            </TouchableOpacity>
        </View>
        <View style={[styles.cardCourse]}>
            <Image style={styles.courseImagedesigne} source={require('../images/js.png')} />
            <Text style={styles.textHeaderCourse}>JavaScript</Text>
            <Text style={styles.textAuthorCourse}>By W3 School</Text>
            <TouchableOpacity style={styles.touchButton}
            onPress={() => {openWebsite('https://www.w3schools.com/js/default.asp')}}>
                <Text style={styles.touchableText}>Learn Here</Text>
            </TouchableOpacity>
        </View>
        <View style={[styles.cardCourse]}>
            <Image style={styles.courseImagedesigne} source={require('../images/nodeJs.png')} />
            <Text style={styles.textHeaderCourse}>NodeJs</Text>
            <Text style={styles.textAuthorCourse}>By W3 School</Text>
            <TouchableOpacity style={styles.touchButton}
            onPress={() => {openWebsite('https://www.w3schools.com/nodejs/default.asp')}}>
                <Text style={styles.touchableText}>Learn Here</Text>
            </TouchableOpacity>
        </View>
        <View style={[styles.cardCourse]}>
            <Image style={styles.courseImagedesigne} source={require('../images/sql.png')} />
            <Text style={styles.textHeaderCourse}>SQL</Text>
            <Text style={styles.textAuthorCourse}>By W3 School</Text>
            <TouchableOpacity style={styles.touchButton}
            onPress={() => {openWebsite('https://www.w3schools.com/mysql/default.asp')}}>
                <Text style={styles.touchableText}>Learn Here</Text>
            </TouchableOpacity>
        </View>
        <View style={[styles.cardCourse]}>
            <Image style={styles.courseImagedesigne} source={require('../images/reactnative.png')} />
            <Text style={styles.textHeaderCourse}>React Native</Text>
            <Text style={styles.textAuthorCourse}>By React Native Docs.</Text>
            <TouchableOpacity style={styles.touchButton}
            onPress={() => {openWebsite('https://reactnative.dev/docs/environment-setup')}}>
                <Text style={styles.touchableText}>Learn Here</Text>
            </TouchableOpacity>
        </View>
        <View style={[styles.cardCourse]}>
            <Image style={styles.courseImagedesigne} source={require('../images/reactjs.png')} />
            <Text style={styles.textHeaderCourse}>React Js</Text>
            <Text style={styles.textAuthorCourse}>By React Docs.</Text>
            <TouchableOpacity style={styles.touchButton}
            onPress={() => {openWebsite('https://react.dev/learn')}}>
                <Text style={styles.touchableText}>Learn Here</Text>
            </TouchableOpacity>
        </View>
        
      </ScrollView>
    </View>
  )
}

export default Courses

const styles = StyleSheet.create({
    textCourseStyle:{
        color: 'black',
        fontSize: 20,
        fontWeight: '700',
        marginLeft: 25,
        marginTop: 25,
    },
    cardCourse:{
        height: 480,
        width: 330,
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        margin: 15,
    },
    courseImagedesigne:{
        height: 350,
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20.
    },
    textHeaderCourse:{
        color: 'black',
        fontSize: 33,
        fontWeight: '800',
        marginLeft: 25,
        marginTop: 8,
    },
    textAuthorCourse:{
        color: "black",
        fontSize: 15,
        fontWeight: '600',
        marginLeft: 25,
    },
    touchableText:{
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
    },
    touchButton:{
        backgroundColor: '#91D3FF',
        height: 40,
        width:'75%',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 50,
        marginTop: 3,
    },
})