import React from 'react';
import {ImageBackground, View, Text, Image, Pressable, TouchableOpacity} from 'react-native';
import LevelCard from "../components/level-card";
import * as firebase from "firebase";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Levels extends React.Component{
    
    #email = "";

    

    constructor(){
        super();
        this.state={
            statusLevelOne: "",
            statusLevelTwo: "",
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
            snapshot.forEach( (childSnapshot) => {
                if(childSnapshot.val().username === this.#email.split("@")[0].replace('.','').replace('_','')){
                    //console.log(childSnapshot.val().levelOne);
                    tempLevelOne = childSnapshot.val().levelOne;
                    tempLevelTwo = childSnapshot.val().levelTwo;
                }
                
            })
            this.setState({ statusLevelOne : tempLevelOne,
                            statusLevelTwo : tempLevelTwo
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
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("LevelOne")} >
                                    <LevelCard levelNumber={"1"} bgColor="#F3A416"/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("LevelTwo")} disabled={ this.state.statusLevelOne === "true" ? false : true } >
                                    <LevelCard levelNumber={"2"} bgColor={this.state.statusLevelOne === "true" ? "#F3A416" : "#875f18"}/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("LevelThree")} disabled={ this.state.statusLevelTwo === "true" ? false : true }>
                                    <LevelCard levelNumber={"3"} bgColor={this.state.statusLevelTwo === "true" ? "#F3A416" : "#875f18"}/>
                                </TouchableOpacity>
                                
                            </View>
                            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("LevelFour")} /*disabled={this.arrayLevels[2]==="true" ? false : true}*/>
                                    <LevelCard levelNumber={"4"} bgColor="#875f18"/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("LevelFive")} /*disabled={this.arrayLevels[3]==="true" ? false : true}*/>
                                    <LevelCard levelNumber={"5"} bgColor="#875f18"/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("LevelSix")} /*disabled={this.arrayLevels[4]==="true" ? false : true}*/>
                                    <LevelCard levelNumber={"6"} bgColor="#875f18"/>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("LevelSeven")} /*disabled={this.arrayLevels[5]==="true" ? false : true}*/>
                                    <LevelCard levelNumber={"7"} bgColor="#875f18"/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("LevelEight")} /*disabled={this.arrayLevels[6]==="true" ? false : true}*/>
                                    <LevelCard levelNumber={"8"} bgColor="#875f18"/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("LevelNine")} /*disabled={this.arrayLevels[7]==="true" ? false : true}*/>
                                    <LevelCard levelNumber={"9"} bgColor="#875f18"/>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("LevelTen")} /*disabled={this.arrayLevels[8]==="true" ? false : true}*/>
                                    <LevelCard levelNumber={"10"} bgColor="#875f18"/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("LevelEleven")} /*disabled={this.arrayLevels[9]==="true" ? false : true}*/>
                                    <LevelCard levelNumber={"11"} bgColor="#875f18"/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("LevelTwelve")} /*disabled={this.arrayLevels[10]==="true" ? false : true}*/>
                                    <LevelCard levelNumber={"12"} bgColor="#875f18"/>
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