import React, {useState} from "react";
import { ImageBackground, StyleSheet, ToastAndroid } from "react-native";
import {  Text, View, Switch, NativeBaseProvider, ScrollView, Box,Button } from 'native-base';

  const Profile = ({ navigation }) =>{
    const imageBG = require("../assets/Bg_login.jpg");
    const logOut = () => {
      ToastAndroid.show(
        "See you!",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM);
      navigation.navigate("Login");
    }
    return(
      <ImageBackground source={imageBG} resizeMode="cover" style={styles.image}>
        <NativeBaseProvider>
         <ScrollView w="100%">
          <Text color="white">
            This is profile
          </Text>
          <Box>
              <Button
                style={{ shadowColor: "black", shadowRadius: 10 }}
                backgroundColor="#0AE09E"
                marginTop="5"
                borderRadius={"md"}
                borderColor="#50e8cc"
                alignSelf="center"
                width= "200"
                height= "50"
                onPress={logOut}
              >
                <Text style={styles.text}>Log out</Text>
              </Button>
            </Box>
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
    text: {
      color: "black",
      fontSize: 22,
      fontWeight: "bold",
    },
    image: {
      flex: 1,
      justifyContent: "center",
    },
  });
  export default Profile;