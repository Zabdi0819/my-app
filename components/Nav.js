import React, {useState} from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import History from "./History.js";
import Profile from "./Profile.js";
import Cafe from "./Cafe.js";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserContext from "../context/UserContext.js";


const StackNav = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Nav({route}) {
  const { name } = route.params;

  return (
    <UserContext.Provider value={name}>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({focused}) => {
          let iconName = ''
          switch (route.name) {
            case 'Cafe':
              iconName = 'home';
              break;
            case 'History':
              iconName = 'alarm';
              break;
            case 'Profile':
              iconName = 'person'
          }
          return <Ionicons name={iconName} size={25} color={focused ? "black" : "white"} />
        }, 
        headerStyle: { backgroundColor: "#110542", shadowColor: "#0AE09E", shadowRadius: 5 },
        headerTintColor: "white",
        headerTitleStyle: { fontWeight: "bold", fontSize: 22 },
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#FFF",
        tabBarActiveBackgroundColor: "#0AE09E",
        tabBarInactiveBackgroundColor: "#110542",
        tabBarItemStyle: { borderColor: "white" },
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: [
          {
            borderTopWidth: 1,
            borderTopColor: "white",
            shadowColor: "#0AE09E",
            shadowRadius: 5,
            display: "flex"
          },
          null]
      })}>
      <Tab.Screen name="Cafe" component={Cafe} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
    </UserContext.Provider>
  );
}

export default Nav;