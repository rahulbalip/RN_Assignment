//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import Input from './comp/Input'
import TopText from '../src/comp/TopText'
import RoundButton from '../src/comp/RoundButton'


// create a component
const First = (props) => {
    const [FirstName,ChangeFirstName]=useState('')
    const [LastName,changeLastName]=useState('')
    const [email,changeEmail]=useState('')
    const [password,changePassword]=useState('')
    const [phone,changePhoneNumber]=useState('')

    const Test = ()=>{
        if( FirstName== ''){
          alert('Username Required')
        }else if(LastName == ''){
          alert('Password Required')
        }else if(email==''){
            alert('Email is required')
        }else if(password == ''){
            alert('Password is required')
        }else if(phone == ''){
            alert('Phone Number is required')
        }
        else{
          props.navigation.navigate('Home')
        } 
      
      }
    return (
        <View style={styles.container}>
        <TopText>WELCOME</TopText>
            <Input image={require('../src/asset/img/username_icon.png')} placeHolder='First Name' onChangeText={(name)=>ChangeFirstName(name)}/>
            <Input image={require('../src/asset/img/username_icon.png')} placeHolder='Last Name' onChangeText={(Last)=>changeLastName(Last)}/>
            <Input image={require('../src/asset/img/email_icon.png')} placeHolder='Email' onChangeText={(mail)=>changeEmail(mail)}/>
            <Input image={require('../src/asset/img/password_icon.png')} placeHolder='Password' onChangeText={(pass)=>changePassword(pass)}/>
            <Input image={require('../src/asset/img/cellphone.png')} placeHolder='Phone Number' onChangeText={(username)=>changePhoneNumber(username)}/>

            <RoundButton 
            onPress={()=>Test()}>Next</RoundButton>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#87ceeb',
    },
});

//make this component available to the app
export default First;
