import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  BottomNavigator from './bottomTab'

import Home from './src/Home'
import First from './src/first';
import Second from './src/Second'

const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="First" component={First} />
        <Stack.Screen name="Second" component={BottomNavigator} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}





export default App;