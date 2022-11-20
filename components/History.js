import React, {useState} from "react";
import { ImageBackground, StyleSheet } from "react-native";
import useUsers from "../hooks/useUsers";
import {  Text, View, Switch, NativeBaseProvider, ScrollView} from 'native-base';

  const History = () =>{
    const user = useUsers();
    const imageBG = require("../assets/Bg_login.jpg");
    return(
      <ImageBackground source={imageBG} resizeMode="cover" style={styles.image}>
        <NativeBaseProvider>
         <ScrollView w="100%">
          <Text color="white">
            This is history, {user}
          </Text>
      </ScrollView>
      </NativeBaseProvider>
      </ImageBackground>
    )
  }
 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    image: {
      flex: 1,
      justifyContent: "center",
    },
  });

  export default History;