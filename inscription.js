import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Inscription extends Component {
  state = {
    email: '',
    password: ''
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

  inscription = async () => {
    const { email, password } = this.setState
    fetch('http://snapchat.wac.under-wolf.eu/inscription',{
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
      console.log(result)
      alert("Inscription réussite")
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
        () => this.inscription(this.state.email, this.state.password)
      }>
      <Text style = {styles.submitButtonText}> Submit </Text>
      </TouchableOpacity>
      </View>
    )
  }
}
export default Inscription

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
