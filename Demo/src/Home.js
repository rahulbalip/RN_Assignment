import React,{useState} from 'react';
import { Text, View, StyleSheet, Dimensions, TextInput,Button,Alert,ImageBackground } from 'react-native';
import Input from './comp/Input'
import RoundButton from '../src/comp/RoundButton'
import TopText from '../src/comp/TopText'
const {width,height}=Dimensions.get('window')


const WIDTH = Dimensions.get('screen').width;

const Home = (props)=> {
  const [UserName,changeUserName]=useState('')
  const [password,changePassword]=useState('')

const Test = ()=>{
  if(UserName == ''){
    alert('Username Required')
  }else if(password == ''){
    alert('Password Required')
  }else{
    props.navigation.navigate('Second')
  } 

}

    return (
      <View style={styles.container}>
        <TopText>WELCOME</TopText>
       <Input image={require('../src/asset/img/username_icon.png')} placeHolder='Username' onChangeText={(username)=>changeUserName(username)}/>
       <Input image={require('../src/asset/img/password_icon.png')} placeHolder='Password' onChangeText={(username)=>changePassword(username)}/>
       <RoundButton 
            onPress={()=>Test()}>Login</RoundButton>

<RoundButton 
            onPress={()=>props.navigation.navigate('First')}>SignUp</RoundButton>
           

     </View>
    );
  
}
export default Home
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#87ceeb',
  }
});
