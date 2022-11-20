import React, {useEffect, useState} from "react";
import {StyleSheet, ImageBackground} from 'react-native';
import useUsers from "../hooks/useUsers";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { View, Button, Text, NativeBaseProvider, ScrollView, FlatList, Input} from 'native-base';
import axios from "axios";

const ItemUser = (props) => (
  <NativeBaseProvider>
    <View style={styles.cardView}>
     <Text style={{textTransform: 'uppercase', fontWeight:'bold'}}>
           {props.id}
     </Text>
     <Text style={{textTransform: 'uppercase', color:'green'}} >
          {props.name}
     </Text> 
     <Text style={{textTransform: 'uppercase', color:'green'}} >
          {props.email}
     </Text> 
 </View>
  </NativeBaseProvider>
  
);

const Cafe = () =>{
  const imageBG = require("../assets/Bg_login.jpg");
  const user = useUsers();
  const [prueba, setPrueba] = useState({action: 'getData'}); 
  const [usersList, setUsersList] = useState({})
  const [text, onChangeText] = useState("");
  const [data, setData] = useState({
    id: '',
    name: '',
    email: ''
  })
  const [formData2, setFormData2] = useState({
    name: '',
    password: '',
    action: 'login'
  })
  
  const pruebaBtn = () =>{
    console.log('formData: Hola');
  } 

  const getUsers = async () =>{
    //const  formDataforRequest = new FormData()
    //formDataforRequest.append('action', prueba.action)
    const response = await axios.get('http://192.168.100.241/ApiMovil/index.php')
    setUsersList(response.data)
    setData({
      id: response.data[0]["id"],
      name: response.data[0]["name"],
      email: response.data[0]["email"]
    })
    console.log('typeof', typeof (response.data))
  };

  const renderItem = ({ item }) => (
    <ItemUser 
        id={item.id} 
        name={item.name} 
        email={item.email}
    /> )

  useEffect(() => {
    getUsers();
  },  [])

  return(
    <ImageBackground source={imageBG} resizeMode="cover" style={styles.image}>
<NativeBaseProvider>
      <Button onPress={()=>pruebaBtn()} bg="#1CEB79">
        Test
      </Button>
      <Input
        style={styles.input}
        defaultValue={data.name}
        onChangeText={value => setData({
          ...formData2,
          name: value
        })}
        //value={data.name}
      />
      <MaterialCommunityIcons name="motion-sensor" color={"white"} size={60} />
      <MaterialCommunityIcons name="gas-cylinder" color={"white"} size={60} />
      <Text style={{textTransform: 'uppercase', fontWeight:'bold'}}>
        Hi, {user}
     </Text>
     <Text style={{textTransform: 'uppercase', fontWeight:'bold'}}>
        Hi2, {data.email}
     </Text>
        <FlatList
          style={{marginTop:15}}
          data={usersList}
          renderItem={renderItem}
          keyExtractor={item =>item.id} 
        />
    </NativeBaseProvider>
    </ImageBackground>
    
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  cardView: {
      backgroundColor: "white",
      borderRadius: 20,
      marginVertical:5,
      padding: 35,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    image: {
      flex: 1,
      justifyContent: "center",
    }

});
{/*{/*const Cat = (propsFlattener)=> {
    const [isHungry, setIsHungry] = useState(true)
    return(
      <View>
        <Text>
          I am {propsFlattener.name}, and I am {isHungry ? "hungry": "full"}!
        </Text>
        <Button
          colorScheme = "primary"
          isDisabled = {!isHungry}
          onPress={()=>{
            console.log('isHungry ', isHungry)
            setIsHungry(false)
          }}
        >
          Primary
        </Button>
      </View>
    )
  }
  
  const Cafe = ({route}) =>{
    const { name } = route.params
    return(
      <View>
        <Cat name = {name}/> 
        <Cat name = "Pepe"/>
      </View>
    )
  }*/}

  export default Cafe;