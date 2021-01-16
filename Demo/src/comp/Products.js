//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Products = (props) => {
    return (
        <View style={styles.container}>
            <Text style={{alignItems:'center'}}>{props.title}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width:100,
        height:100,
        borderRadius:50,
        borderWidth:2,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#adff2f'
       
    }
       
    
});

//make this component available to the app
export default Products;
