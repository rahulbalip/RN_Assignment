//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Settings = () => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize:50}}>Settings</Text>
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
export default Settings;
