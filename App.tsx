import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import AppLoading from "expo-app-loading";  
import * as Font from 'expo-font';

let customFonts = {
  'Dongle-Bold': require('./assets/fonts/Dongle-Bold.ttf'),
};

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading/>;
    }
    return (
      <View>
      <ImageBackground
        source={require('./assets/background.png')}
        style={styles.background}
      >
        <View>
          <Image source={require('./assets/logo.png')} style={styles.logo} resizeMode="contain" >
          </Image>
          <View style={styles.buttons}>
          <TouchableOpacity>
            <Text style={styles.button}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.button}>Sign Up</Text>
          </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    background: {
      width: '100%',
      height: '100%'
    },
    logo:{
      width: 280,
      height: 280,
      marginLeft: '17%',
      marginTop: '55%'
    },
    button: {
      overflow: 'hidden',
      backgroundColor: '#FBB03B',
      width: 125,
      height: 40,
      borderRadius: 8,
      textAlign: 'center',
      lineHeight: 30,
      fontWeight: 'bold',
      fontFamily: "Dongle-Bold",
      color: "#D6860B",
      padding: "5%",
      fontSize: 30,
    },
    buttons: {
      flexDirection:"row", flex: 1, 
      justifyContent: 'space-between', 
      marginLeft: "17%", 
      marginRight: "17%",
      marginTop: "-10%",
      }
});