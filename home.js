import * as React from 'react';
import { Text, View, StyleSheet, Button, Image, Alert, ScrollView, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  render() {

    let screenWidth = Dimensions.get('window').width;
    let screenHeight = Dimensions.get('window').height;

    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={true}
      >
        <View style={{
          width:screenWidth,
          flex:1}}>
          <View style={{flex:1, }}>
            <Image
              style={{ width: '100%', height: '100%' }}
              source={require('./assets/Logo-Snapchat.png')}
              />
          </View>

          <View style={{flex:1}}>

            <View style={{flex:1, backgroundColor:"#FFE143"}}></View>
            <View style={{flex:1, backgroundColor:"red"}}>
              <Text style={{color:"white", textAlign:'center', fontSize:24}}
              onPress={() => this.props.navigation.navigate('Inscription')}>
                Inscription
              </Text>
            </View>
            <View style={{flex:1, backgroundColor:"blue"}}>
              <Text style={{color:"white", textAlign:'center', fontSize:24}}
                onPress={() => this.props.navigation.navigate('Connexion')}>
                Connexion
              </Text>
            </View>
          </View>

        </View>
        <View>
        <Image
              style={{ width: screenWidth, height: screenHeight }}
              //source={require('./assets/Bambou-jaune.jpg')}
              />
        </View>

        <View>
        <Image
              style={{ width: screenWidth, height: screenHeight }}
              //source={require('./assets/Bambou-vert.jpg')}
              />
        </View>
        <View>
                <Image
                style={{ width: screenWidth, height: screenHeight }}
                //source={require('./assets/Bambou.jpg')}
                />
          </View>
      </ScrollView>
    );
  }
}

export default HomeScreen;
