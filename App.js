import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBs5q9LrmufF22x8DoYHsM2rvUHk1VBH84",
  authDomain: "softminds-f4345.firebaseapp.com",
  projectId: "softminds-f4345",
  storageBucket: "softminds-f4345.appspot.com",
  messagingSenderId: "364045688081",
  appId: "1:364045688081:web:2fe5bd513c7c3c83ef40b0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      username: "",
      password: "",
      email: ""
    };
  }

  addUserInDatabase = () => {
    firebase.database().ref("user").set({
      username: "diana",
      password: "1234",
      email: "diana.udisteanu@yahoo.com"
    }).catch(function(error){
      console.log(error.message)
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>SoftMINDS</Text>
        <StatusBar style="auto" />
        <Button title="Write" onPress = {this.addUserInDatabase}/> 
      </View>
    );
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

