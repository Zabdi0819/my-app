import React, {useState} from "react";
import { NativeBaseProvider, Center} from 'native-base'
import LoginForm from './components/LoginForm.js';
import Cafe from "./components/Cafe.js"
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Nav from './components/Nav.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserContext from "./context/UserContext.js";

//const Tab = createBottomTabNavigator();

const StackNav = createNativeStackNavigator();

/**function Tab(){
  return (  
    <Tab.Navigator initialRouteName = "LoginForm">
      <Tab.Screen name = "Login" component = { LoginForm}/>
      <Tab.Screen name = "Cafe" componente = { Cafe}/>
    </Tab.Navigator>
  )
}**/


const userData = {name: 'Juan'}
export default function App(){
  

  return(
    
      <NativeBaseProvider>
      <NavigationContainer>
      <UserContext.Provider value={userData}>
        <StackNav.Navigator>
        <StackNav.Screen options={{ headerShown: false }} name="Login" component={Login} />
          <StackNav.Screen options={{headerShown: false}} name="Nav" component={Nav}/>
          
        </StackNav.Navigator>
        </UserContext.Provider>
      </NavigationContainer>
    </NativeBaseProvider>
  )
};