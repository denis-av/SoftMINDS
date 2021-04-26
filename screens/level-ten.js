import React from 'react';
import {View, ImageBackground, Pressable, Text, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import NumberCard from '../components/number-card';
import { Stopwatch} from 'react-native-stopwatch-timer';
import * as firebase from "firebase";
import AsyncStorage from '@react-native-async-storage/async-storage';
 
export default class LevelTen extends React.Component{
 
    #currentTime = "";
    #email = "";
 
    constructor(){
        super();
        this.state = {
            answer: "",
            isStopwatchActive: false,
            correctAnswer: '26',
            userScore: 0,
        };
 
    };
 
    componentDidMount(){
        this.setState({isStopwatchActive:true});
        this.getCurrentUser();
        this.getCurrentUserPoints();
    }

    getCurrentUserPoints = () => {
        firebase.database().ref('/ranking').once('value').then((snapshot) => {
            var tempTotalScore = 0;
            snapshot.forEach( (childSnapshot) => {
                if(childSnapshot.val().username === this.#email.split("@")[0].replace('.','').replace('_','')){
                    tempTotalScore = childSnapshot.val().score;
                }
            })
            this.setState({userScore: tempTotalScore});
        })
    }

    getCurrentUser = async() => {
        try{
            const value = await AsyncStorage.getItem("email");
            if(value !== null) {
                this.#email = value;
            }
        }catch(e){ }
    }
 
    handleAnswer = () =>{
        const username = this.#email.split("@")[0].replace('.','').replace('_','');
        if( this.state.answer === this.state.correctAnswer ){
            this.setState({isStopwatchActive:!this.state.isStopwatchActive})
            firebase.database().ref("/users").child(username).set({
                username: username,
                levelOne: "true",
                levelTwo: "true",
                levelThree: "true",
                levelFour: "true",
                levelFive: "true",
                levelSix: "true",
                levelSeven: "true",
                levelEight: "true",
                levelNine: "true",
                levelTen: "true",
                levelEleven: "",
                levelTwelve: ""
            })

            if( this.#currentTime.localeCompare("00:30") < 0 ){
                points = 3;
            }else if( (this.#currentTime.localeCompare("00:30") > 0) && (this.#currentTime.localeCompare("01:00") < 0)){
                points = 2;
            }else if((this.#currentTime.localeCompare("01:00") > 0) && (this.#currentTime.localeCompare("02:00") < 0)){
                points = 1;
            }else if(this.#currentTime.localeCompare("02:00") >0 ){
                points = 0;
            }

            firebase.database().ref("/ranking").child(username).update({
                username: username,
                score: points + this.state.userScore,
            })

            Alert.alert(
                "Correct Answer",
                "You submitted the correct answer!",
                [
                  { text: "Go back to levels", onPress: () => {this.props.navigation.reset({index:0, routes:[{name:'Levels'}]}) }}
                ]
              );
        } else{
            Alert.alert(
                "Wrong Answer",
                "The answer is incorrect!",
                [
                  { text: "Try again", onPress: () => this.setState({answer:""})}
                ]
              );
        }
    }
 
    handleStopwatch(){
        console.log(this.formatTime);
    }
 
    render(){
        return(
            <View style={{flex:1}}>
                <ImageBackground source={require("../app/images/bg4.png")} style={{width:"100%", height:"100%"}}>
                    <View style={{flex: 0.13, backgroundColor:"#F3A416", flexDirection:'row', alignItems:'flex-end'}}>
                            <Pressable style={{flex: 0.25, height:"75%", alignItems:'center', justifyContent:'center'}} onPress={() => this.props.navigation.navigate("Levels")}>
                                <Image source={require("../app/images/back-2.png")} resizeMode = "center" style={{width:"35%", height:"35%"}}/>
                            </Pressable>
                        <View style={{flex: 0.50, height:"75%", alignItems:'center', justifyContent:'center'}}>
                            <Text style={{fontSize: 40, color:"white", fontFamily:"bold-font"}}>LEVEL 10</Text>
                        </View>
                    </View>
                    <View style={{flex: 0.09, alignItems:'center', justifyContent:'center'}}>
                        {/* <Text style={{fontSize:35, color:'white', fontFamily:'bold-font'}}>00:10</Text> */}
                        <Stopwatch start={this.state.isStopwatchActive} options={{container: {
    backgroundColor: 'transparent',
    borderRadius: 5,
 
  },
  text: {
    fontSize:35, color:'white', fontFamily:'bold-font'
  }}}
  getTime={(time)=> this.#currentTime = time}
 
  />
                    </View>
                    <View style={{flex: 0.50, alignItems:'center', justifyContent:'center'}}>
                        <Image source={require("../app/images/level_10.png")} resizeMode = "contain" style ={{width:"100%", height:"100%"}}/>
                    </View>
                    <View style={{flex: 0.10,  flexDirection:'row', marginHorizontal:"7%", alignItems:'center', justifyContent:'center'}}>
                        <View style={{flex: 0.60, flexDirection:'column', justifyContent:'flex-end', height:"70%"}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <TextInput placeholder="Answer here" 
                                       placeholderTextColor="#696969"
                                       style={{color: '#696969',fontSize:23, fontFamily:'bold-font', width:"85%"}}
                                       value={this.state.answer}
                                       editable = {false}
                                />
                                <TouchableOpacity style ={{width:30, height:30, alignItems:'center', justifyContent:'center'}} onPress={() => this.setState({answer: ""})}>
                                    <Image source={require("../app/images/x.png")} resizeMode = "contain" style={{width:"70%", height:"70%"}}/>
                                </TouchableOpacity>
                            </View>
                        <View style={{flexDirection:'row', alignItems:'center', borderWidth:2, borderTopWidth:0, borderLeftWidth:0, borderRightWidth:0,borderColor:'white', width:"97%"}}></View>
                        </View>
                            <View style={{flex:0.40}}>
                                <Pressable style={{backgroundColor: '#F3A416', height:"70%", alignItems:'center', justifyContent:'center', marginLeft:"7%"}}  onPress={this.handleAnswer} >
                                    <Text style={{fontSize: 25, fontFamily:'bold-font', color:'white'}}>SUBMIT</Text>
                                </Pressable>
                            </View>
                    </View>
                    <View style={{flex: 0.22, justifyContent:'space-evenly',marginBottom:"7%", alignContent:'center', marginHorizontal:"7%"}}>
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                            <NumberCard number={"0"} bgColor="#F3A416" onPress = {() => this.setState({answer: this.state.answer.concat("0")})}/>
                            <NumberCard number={"1"} bgColor="#F3A416" onPress = {() => this.setState({answer: this.state.answer.concat("1")})}/>
                            <NumberCard number={"2"} bgColor="#F3A416" onPress = {() => this.setState({answer: this.state.answer.concat("2")})}/>
                            <NumberCard number={"3"} bgColor="#F3A416" onPress = {() => this.setState({answer: this.state.answer.concat("3")})}/>
                            <NumberCard number={"4"} bgColor="#F3A416" onPress = {() => this.setState({answer: this.state.answer.concat("4")})}/>
                        </View>
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                            <NumberCard number={"5"} bgColor="#F3A416" onPress = {() => this.setState({answer: this.state.answer.concat("5")})}/>
                            <NumberCard number={"6"} bgColor="#F3A416" onPress = {() => this.setState({answer: this.state.answer.concat("6")})}/>
                            <NumberCard number={"7"} bgColor="#F3A416" onPress = {() => this.setState({answer: this.state.answer.concat("7")})}/>
                            <NumberCard number={"8"} bgColor="#F3A416" onPress = {() => this.setState({answer: this.state.answer.concat("8")})}/>
                            <NumberCard number={"9"} bgColor="#F3A416" onPress = {() => this.setState({answer: this.state.answer.concat("9")})}/>
                        </View>
 
                    </View>
                </ImageBackground>
            </View>
        );
    }
}