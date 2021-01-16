//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const AboutUs = () => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize:50}}>AboutUs</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#87ceeb',

    },
});

//make this component available to the app
export default AboutUs;
