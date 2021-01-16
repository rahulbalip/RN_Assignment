import React from 'react';
import {StyleSheet,Text,TouchableOpacity} from 'react-native';
import {scale,verticalScale,moderateScale} from 'react-native-size-matters'


const RoundButton = props => (
    <TouchableOpacity style={styles.buttonStyle} onPress={props.onPress}>
                <Text style={styles.butttonText}>{props.children}</Text>
             
            </TouchableOpacity>
    );

    


export default RoundButton;

const styles=StyleSheet.create({

    buttonStyle:{
        
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'red',
            height:verticalScale(52),
            width:200,
            marginHorizontal:scale(13),
            borderRadius:scale(5),
            fontWeight:'200',
            marginTop:scale(20)

    },
    butttonText:{
            fontSize:scale(30),
           color:'white'
    }
});