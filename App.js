import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, TextInput } from 'react-native';
import AppLoading from "expo-app-loading";  
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD8iZt2ZDESwTCSf7sMqD73T1tqrXaFJYA",
  authDomain: "atendi-2f6f6.firebaseapp.com",
  projectId: "atendi-2f6f6",
  storageBucket: "atendi-2f6f6.appspot.com",
  messagingSenderId: "926647306301",
  appId: "1:926647306301:web:a62bd40baa0124dd3d4254",
  measurementId: "G-HRSN54J5BV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const Stack = createNativeStackNavigator();

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
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash"   screenOptions={{ headerShown: false }}>
          <Stack.Screen name = "Splash" component={SplashScreen} />
          <Stack.Screen name = "Login" component={LoginScreen} /> 
          <Stack.Screen name = "SignUp" component={SignUpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const SplashScreen = ({ navigation }) => {
  return (
    <View>
    <ImageBackground
      source={require('./assets/background.png')}
      style={styles.background}
    >
      <View>
        <Image source={require('./assets/logo.png')} style={styles.logo} resizeMode="contain" ></Image>
        <View style={styles.splashButtons}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.splashButton}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.splashButton}>Sign Up</Text>
        </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
    </View>
  )
}

const LoginScreen = ({ navigation }) => {
  return (
    <View>
    <ImageBackground
      source={require('./assets/background.png')}
      style={styles.background}
    >
    </ImageBackground>
    </View>
  )
}

const SignUpScreen = ({ navigation }) => {
  return (
    <View>
    <ImageBackground
      source={require('./assets/background.png')}
      style={styles.background}
    >
    </ImageBackground>
    </View> 
  )
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
    splashButton: {
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
    splashButtons: {
      flexDirection:"row", flex: 1, 
      justifyContent: 'space-between', 
      marginLeft: "17%", 
      marginRight: "17%",
      marginTop: "-10%",
    }
});