import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import Camera from './camera.js';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const RootStack = createStackNavigator(
  {
    Camera: Camera,
  },
  {
    initialRouteName: 'Connexion',
  }
);

const AppContainer = createAppContainer(RootStack);

class Connexion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
    this.changeToCamera = this.changeToCamera.bind(this)
  }

  changeToCamera() {
    this.props.navigation.navigate('Camera')
  }


  handleEmail = (text) => {
    this.setState({ email: text })
  }
  handlePassword = (text) => {
    this.setState({ password: text })
  }
  login = (email, pass) => {
    alert('email: ' + email + ' password: ' + pass)
  }

  connexion = async () => {
    const { email, password } = this.setState
    fetch('http://snapchat.wac.under-wolf.eu/connection',{
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    }).then((response) => response.json())
    .then(function(result){
      if(result.message == "Successful login"){
        //this.changeToCamera()
        console.log(result);
      } else {
        alert("Email ou Password incorrect")
      }
    })
  }


  render() {
    return (
      <View style = {styles.container}>
      <TextInput style = {styles.input}
      underlineColorAndroid = "transparent"
      placeholder = "Email"
      placeholderTextColor = "#9a73ef"
      autoCapitalize = "none"
      onChangeText = {this.handleEmail}/>

      <TextInput style = {styles.input}
      secureTextEntry
      underlineColorAndroid = "transparent"
      placeholder = "Password"
      placeholderTextColor = "#9a73ef"
      autoCapitalize = "none"
      onChangeText = {this.handlePassword}/>

      <TouchableOpacity
      style = {styles.submitButton}
      onPress = {
        () => this.connexion(this.state.email, this.state.password)

      }>
      <Text style = {styles.submitButtonText}> Submit </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style = {styles.submitButton}
      onPress = {
        () => this.changeToCamera()

      }>
      <Text style = {styles.submitButtonText}> Camera </Text>
      </TouchableOpacity>
      </View>
    )
  }
}
export default Connexion

const styles = StyleSheet.create({
  container: {
    paddingTop: 23
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText:{
    color: 'white'
  }
})
