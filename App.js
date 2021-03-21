import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import AddIntoStack from './routes/routes';
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import * as firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBs5q9LrmufF22x8DoYHsM2rvUHk1VBH84",
  authDomain: "softminds-f4345.firebaseapp.com",
  databaseURL: "https://softminds-f4345-default-rtdb.firebaseio.com",
  projectId: "softminds-f4345",
  storageBucket: "softminds-f4345.appspot.com",
  messagingSenderId: "364045688081",
  appId: "1:364045688081:web:2fe5bd513c7c3c83ef40b0"
};

const fontConfig = {
  "light-font": require("./fonts/ProximaNovaThin.otf"),
  "normal-font": require("./fonts/ProximaNovaRegular.otf"),
  "bold-font": require("./fonts/ProximaNovaBold.otf")
};

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      fontsLoaded: false
    };
  }

  async loadFonts(){
    await Font.loadAsync(fontConfig)
    this.setState({fontsLoaded:true})
  }

  async componentDidMount(){
    this.loadFonts();
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render(){
    if(this.state.fontsLoaded){
      return(
        <AddIntoStack/>
      );
    }
    else{
      return(
        <AppLoading/>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

