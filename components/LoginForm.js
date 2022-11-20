import React, { useState } from "react";
import { Box, NativeBaseProvider, Button, ScrollView, Stack, Divider, Text, FormControl, Input, Image } from 'native-base'
import axios from "axios";

const LoginForm = ({ navigation }) => {
  const imageURI = require('../assets/favicon.png')
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    action: 'login'
  })
  const [errors, setErrors] = useState({})
  var pattern = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
  )


  const validate = () => {
    setFormData({ ...formData, action: '' })
    if (formData.name === undefined) {
      setErrors({
        ...errors,
        name: 'Name is required'
      });
      return false
    } else if (formData.name.length < 3) {
      setErrors({
        ...errors,
        name: 'Name is too short'
      });
      return false
    }
    if (formData.password === undefined) {
      setErrors({
        ...errors,
        password: 'Password is required'
      });
      return false
    } else if (formData.password.length < 8) {
      setErrors({
        ...errors,
        password: 'Password is too short'
      });
      return false
    } else if (!pattern.test(formData.password)) {
      //formData.pass.search('[A-Z]')
      console.log('password', formData.password)
      setErrors({
        ...errors,
        password: 'Is not valid'
      });
      return false
    }
    //Cuando no hay error, se tiene que setear en blanco

    setErrors({})

    return true;
  };

  const pruebaM = () => {
    navigation.navigate('Nav', { name: formData.name });
  }

  const onSumit = async () => {
    if (validate) {
      console.log('Submitted', formData)
      console.log('formData', formData)
      console.log('errors', errors)

      //setErrors({})
      //console.log('ERRORS', errors)
      console.log('Name', formData.name)
      console.log('Password', formData.password)
      setFormData({ ...formData, action: 'login' })
      console.log('formData', formData)
      console.log('formData', formData.action)
      const formDataforRequest = new FormData()
      console.log('Type', typeof (formDataforRequest))
      formDataforRequest.append('name', formData.name)
      formDataforRequest.append('password', formData.password)
      formDataforRequest.append('action', formData.action)

      //npm install axios
      const response = await axios.post('http://192.168.100.241/ApiMovil/login.php',
        formDataforRequest,
        {
          headers: { 'Content-Type': 'multipart/form-data', 'Access-Control-Allow-Origin': '*' },
          transformRequest: formData => formDataforRequest,
        }
      )//.then((response) =>{
      //console.log('response.data', response.data)
      console.log('typeof', typeof (response.data))
      console.log('Object.keys', Object.keys(response.data).length)
      console.log('Object', response.data)

      if (Object.keys(response.data).length >= 1) {
        console.log('name', response.data[0].name)
        navigation.navigate('Nav', { name: formData.name });
        console.log('navigation', 'ok')
      } else {
        console.log('retry')
      }
    }
    console.log('Validation Failed', errors)



    //if(response.data == 'ok'){
    //navigation.navigate('Cafe', {name: response.data})
    //name: 'Jorge', last_name:'Dzul', email: 'ahhs@' - para poner otros valores
    //navigation
    //console.log('navigation', 'ok')
    //}else{
    //console.log('Retry')
    //}
    //})
  };

  return (
    <NativeBaseProvider>
      <ScrollView w="100%">
        <Stack space={3} alignSelf="center" px="4" safeArea mt="10"
          w={{ base: "100%", md: "50%" }}>
          <Box>
            <Text fontSize="xl">Login</Text>
            <FormControl isRequired isInvalid={'name' in errors}>
              <FormControl.Label> Nick Name </FormControl.Label>
              <Input p={2} placeholder="Nick Name"
                onChangeText={value => setFormData({
                  ...formData,
                  name: value
                })} />

              {'name' in errors ?
                <FormControl.ErrorMessage>{errors.name}</FormControl.ErrorMessage> :
                <FormControl.HelperText>
                  Name should contain at least 3 character.
                </FormControl.HelperText>
              }
            </FormControl>
            <Divider />
          </Box>
          <Box>
            <FormControl isRequired isInvalid={'password' in errors}>
              <FormControl.Label> Password </FormControl.Label>
              <Input type="password" p={2} placeholder="Password"

                onChangeText={value => setFormData({
                  ...formData,
                  password: value
                })} />

              {'password' in errors ?
                <FormControl.ErrorMessage>{errors.password}</FormControl.ErrorMessage> :
                <FormControl.HelperText>
                  We'll keep this between us
                </FormControl.HelperText>
              }
            </FormControl>
            <Divider />
          </Box>
          <Box>
            <Button
              colorScheme="primary"
              onPress={() => onSumit()}>
              Submit
            </Button>

            <Image source={imageURI} alt="Ditto" height="100" width="100" />
            <Image source={{ uri: 'https://www.gifsanimados.org/data/media/1032/cafe-y-cafeteria-imagen-animada-0013.gif' }}
              alt="Aang flying and surrounded by clouds" height="100" widht="100" />
          </Box>
        </Stack>
      </ScrollView>
    </NativeBaseProvider>
  )
}
export default LoginForm;