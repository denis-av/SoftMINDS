import React from 'react';
import {ImageBackground, View, Text, Image, Pressable, TouchableOpacity, LogBox} from 'react-native';
import LevelCard from "../components/level-card";
import * as firebase from "firebase";
import AsyncStorage from '@react-native-async-storage/async-storage';

LogBox.ignoreAllLogs();
LogBox.ignoreLogs(['Warning: ...']);


export default class Levels extends React.Component{
    
    #email = "";

    constructor(){
        super();
        this.state={
            statusLevelOne: "",
            statusLevelTwo: "",
            statusLevelThree: "",
            statusLevelFour: "",
            statusLevelFive: "",
            statusLevelSix: "",
            statusLevelSeven: "",
            statusLevelEight: "",
            statusLevelNine: "",
            statusLevelTen: "",
            statusLevelEleven: "",
            statusLevelTwelve: "",
        };
    };

    componentDidMount(){
        this.getCurrentUser();
        this.getAvailableLevels();
    }

    getCurrentUser = async() => {
        try{
            const value = await AsyncStorage.getItem("email");
            if(value !== null) {
                this.#email = value;
            }
        }catch(e){ }
    }

    getAvailableLevels = () => {
        
        firebase.database().ref('/users').once('value').then((snapshot) => {
            var tempLevelOne = "";
            var tempLevelTwo = "";
            var tempLevelThree = "";
            var tempLevelFour = "";
            var tempLevelFive = "";
            var tempLevelSix = "";
            var tempLevelSeven = "";
            var tempLevelEight = "";
            var tempLevelNine = "";
            var tempLevelTen = "";
            var tempLevelEleven = "";
            var tempLevelTwelve = "";
            snapshot.forEach( (childSnapshot) => {
                if(childSnapshot.val().username === this.#email.split("@")[0].replace('.','').replace('_','')){
                    tempLevelOne = childSnapshot.val().levelOne;
                    tempLevelTwo = childSnapshot.val().levelTwo;
                    tempLevelThree = childSnapshot.val().levelThree;
                    tempLevelFour = childSnapshot.val().levelFour;
                    tempLevelFive = childSnapshot.val().levelFive;
                    tempLevelSix = childSnapshot.val().levelSix;
                    tempLevelSeven = childSnapshot.val().levelSeven;
                    tempLevelEight = childSnapshot.val().levelEight;
                    tempLevelNine = childSnapshot.val().levelNine;
                    tempLevelTen = childSnapshot.val().levelTen;
                    tempLevelEleven = childSnapshot.val().levelEleven;
                    tempLevelTwelve = childSnapshot.val().levelTwelve;
                }
                
            })
            this.setState({ statusLevelOne : tempLevelOne,
                            statusLevelTwo : tempLevelTwo,
                            statusLevelThree: tempLevelThree,
                            statusLevelFour : tempLevelFour,
                            statusLevelFive: tempLevelFive,
                            statusLevelSix : tempLevelSix,
                            statusLevelSeven : tempLevelSeven,
                            statusLevelEight : tempLevelEight,
                            statusLevelNine : tempLevelNine,
                            statusLevelTen : tempLevelTen,
                            statusLevelEleven : tempLevelEleven,
                            statusLevelTwelve: tempLevelTwelve
                        });
        })
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <ImageBackground source={require("../app/images/bg3.jpeg")} style={{width:"100%", height:"100%"}}>
                <View style={{flex: 0.13, backgroundColor:"#F3A416", flexDirection:'row', alignItems:'flex-end'}}>
                        <Pressable style={{flex: 0.25, height:"75%", alignItems:'center', justifyContent:'center'}} onPress={() => this.props.navigation.navigate("Menu")}>
                            <Image source={require("../app/images/back-2.png")} resizeMode = "center" style={{width:"35%", height:"35%"}}/>
                        </Pressable>
                    <View style={{flex: 0.50, height:"75%", alignItems:'center', justifyContent:'center'}}>
                        <Text style={{fontSize: 40, color:"white", fontFamily:"bold-font"}}>LEVELS</Text>
                    </View>
                </View>
                <View style={{flex: 0.87}}>
                    <View  style={{flex: 0.77, justifyContent:'center'}}>
                        <View style={{height:"87%", justifyContent:'space-evenly'}}>
                            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
                                <TouchableOpacity  onPress={() => this.props.navigation.navigate("LevelOne")} disabled={this.state.statusLevelOne === "true" ? true : false} >
                                    <LevelCard levelNumber={"1"} bgColor="#F3A416"/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("LevelTwo")} disabled={ this.state.statusLevelTwo === "true" ? true : this.state.statusLevelOne === "true" ? false : true } >
                                    <LevelCard levelNumber={"2"} bgColor={this.state.statusLevelOne === "true" ? "#F3A416" : "#875f18"}/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("LevelThree")} disabled={ this.state.statusLevelThree === "true" ? true : this.state.statusLevelTwo === "true" ? false : true }>
                                    <LevelCard levelNumber={"3"} bgColor={this.state.statusLevelTwo === "true" ? "#F3A416" : "#875f18"}/>
                                </TouchableOpacity>
                                
                            </View>
                            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("LevelFour")} disabled={ this.state.statusLevelFour ==="true" ? true : this.state.statusLevelThree === "true" ? false : true }>
                                    <LevelCard levelNumber={"4"} bgColor={this.state.statusLevelThree === "true" ? "#F3A416" : "#875f18"}/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("LevelFive")} disabled={ this.state.statusLevelFive ==="true" ? true : this.state.statusLevelFour === "true" ? false : true }>
                                    <LevelCard levelNumber={"5"} bgColor={this.state.statusLevelFour === "true" ? "#F3A416" : "#875f18"}/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("LevelSix")} disabled={ this.state.statusLevelSix ==="true" ? true : this.state.statusLevelFive === "true" ? false : true }>
                                    <LevelCard levelNumber={"6"} bgColor={this.state.statusLevelFive === "true" ? "#F3A416" : "#875f18"}/>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("LevelSeven")} disabled={ this.state.statusLevelSeven ==="true" ? true : this.state.statusLevelSix === "true" ? false : true }>
                                    <LevelCard levelNumber={"7"} bgColor={this.state.statusLevelSix === "true" ? "#F3A416" : "#875f18"}/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("LevelEight")} disabled={ this.state.statusLevelEight ==="true" ? true : this.state.statusLevelSeven === "true" ? false : true }>
                                    <LevelCard levelNumber={"8"} bgColor={this.state.statusLevelSeven === "true" ? "#F3A416" : "#875f18"}/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("LevelNine")} disabled={ this.state.statusLevelNine ==="true" ? true : this.state.statusLevelEight === "true" ? false : true }>
                                    <LevelCard levelNumber={"9"} bgColor={this.state.statusLevelEight === "true" ? "#F3A416" : "#875f18"}/>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("LevelTen")} disabled={ this.state.statusLevelTen ==="true" ? true : this.state.statusLevelNine === "true" ? false : true }>
                                    <LevelCard levelNumber={"10"} bgColor={this.state.statusLevelNine === "true" ? "#F3A416" : "#875f18"}/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("LevelEleven")} disabled={ this.state.statusLevelEleven ==="true" ? true : this.state.statusLevelTen === "true" ? false : true }>
                                    <LevelCard levelNumber={"11"} bgColor={this.state.statusLevelTen === "true" ? "#F3A416" : "#875f18"}/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("LevelTwelve")} disabled={ this.state.statusLevelTwelve ==="true" ? true : this.state.statusLevelEleven === "true" ? false : true }>
                                    <LevelCard levelNumber={"12"} bgColor={this.state.statusLevelEleven === "true" ? "#F3A416" : "#875f18"}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    
                </View>


                </ImageBackground>
            </View>
        );
    }

} 