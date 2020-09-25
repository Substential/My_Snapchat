import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
    const { roll } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    this.setState({ hasCameraRollPermission: roll === 'granted' });
  }

  takePicture = () => {
    const options = {quality:1}

      this.camera.takePictureAsync(options).then(data => {
        const asset = MediaLibrary.createAssetAsync(data.uri);
        console.log(data);
      });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (

        <View style={{ flex: 1 }}>
        <Camera style={{ flex: 1 }} type={this.state.type}
        ref={ref => this.camera = ref}>
        <View
        style={{
          flex: 1,
          backgroundColor: 'transparent',
          flexDirection: 'row',
        }}>

        <TouchableOpacity onPress={() => {
          this.takePicture();
        }}>
        <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>Take Picture</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={{
          flex: 1,
          alignSelf: 'flex-start',
          alignItems: 'center',
        }}
        onPress={() => {
          this.setState({
            type:
            this.state.type === Camera.Constants.Type.back
            ? Camera.Constants.Type.front
            : Camera.Constants.Type.back,
          });
        }}>
        <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
        </TouchableOpacity>

        </View>
        </Camera>

        </View>
      );
    }
  }
}
