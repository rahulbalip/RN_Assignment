//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react/cjs/react.development';
import Product from './comp/Products'

// create a component
const Second = () => {


   

    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            <Product  title={'Profile'}/>
            <Product  title={'My Account'}/>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:50}}>
            <Product  title={'My Orders'}/>
            <Product  title={'My Cart'}/>
            </View>
            
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
       backgroundColor:'#87ceeb',
       paddingTop:50
    },
});

//make this component available to the app
export default Second;
