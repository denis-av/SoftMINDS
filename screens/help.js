import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View, ImageBackground, Pressable } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const slides = [
  {
    key: "one",
    title: "HOW TO PLAY",
    text: "By navigating to the levels screen, you will be able to see all the levels. The levels with the faded out background are not able to be played until you solve de previous levels. After entering in a level screen you need to input the solution to the given problem.",
    image: require('../app/images/how_to_play_icon.png'),
  },
  {
    key: "two",
    title: "SCORING SYSTEM",
    text: "Above each given problem which consists of an image there is a timer, dependig on the time it takes toy to solve, you will recevie a certain score: 3 points under 30 seconds, 2 points under 1 minute, 1 point under 2 minutes, 0 points above 2 minutes.",
    image: require('../app/images/scoring_system_icon.png'),
  },
  {
    key: "three",
    title: "RANKING PROCEDURE",
    text: "Into the ranking screen you will find the best players together with the total score obtained by them. There are 3 types of tiers: newbie (under 12 points), intermediate (starting from 12 points to 23), master (starting from 24 points).",
    image: require('../app/images/ranking_procedure_icon.png'),
  },
];

export default class Help extends React.Component {

  state = { showHomePage: false };
  _renderItem = ({ item }) => {
    return (
      <View style={{backgroundColor:'#1a1a1a'}}>
        <Image source={item.image} style={{ resizeMode: "cover", alignSelf:'center' }}/>
        <Text style={{ paddingTop: 25, paddingBottom: 10,fontFamily:"bold-font", fontSize: 37, fontWeight: "bold", color: "#F3A416", alignSelf: "center", marginTop:'5%'}}>{item.title}</Text>
        <Text style={{ textAlign:"center", color:"#fff", fontSize:19, paddingHorizontal:30, marginTop:'7%', fontFamily:"normal-font" }}>{item.text}</Text>
      </View>
    );
  };

  render() {
    if (this.state.showHomePage){
      return <Help/>
    } else 
    return ( 
          <View style={{flex: 1}}>
            <ImageBackground source={require("../app/images/bg4.png")} style={{width:"100%", height:"100%"}}>
              <View style={{flex: 0.13, backgroundColor:"#F3A416", flexDirection:'row', alignItems:'flex-end'}}>
                      <Pressable style={{flex: 0.25, height:"75%", alignItems:'center', justifyContent:'center'}} onPress={() => this.props.navigation.navigate("Menu")}>
                          <Image source={require("../app/images/back-2.png")} resizeMode = "center" style={{width:"35%", height:"35%"}}/>
                      </Pressable>
                  <View style={{flex: 0.50, height:"75%", alignItems:'center', justifyContent:'center'}}>
                      <Text style={{fontSize: 40, color:"white", fontFamily:"bold-font"}}>HELP</Text>
                  </View>
            </View>
            <View style={{flex:0.87, width:"100%",height:"65%", marginTop:'25%'}}>
              <AppIntroSlider renderItem={this._renderItem} data={slides} activeDotStyle={{ backgroundColor:"#F3A416" }} dotStyle={{ backgroundColor:"#875f18"}} nextLabel="" doneLabel=""/>
            </View>
          </ImageBackground>
        </View>
    );
  }
}



