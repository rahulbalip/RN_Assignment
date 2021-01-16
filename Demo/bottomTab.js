import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from './src/Home';
import Second from './src/Second'
import Settings from './src/Settings'
import AboutUs from './src/Aboutus'


const Tab = createMaterialBottomTabNavigator();
const BottomNavigator =()=> {
  return (
  <Tab.Navigator>
      <Tab.Screen name="Home" component={Second} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="AboutUs" component={AboutUs} />

    
    </Tab.Navigator>
   
  );
}
export default BottomNavigator;