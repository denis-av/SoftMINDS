import React from 'react';
import {ImageBackground, View, Text, Image, Pressable, TouchableOpacity} from 'react-native';
import LevelCard from "../components/level-card";

export default class Levels extends React.Component{
    constructor(){
        super();
        this.state={};
    };

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
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("LevelOne")}>
                                    <LevelCard levelNumber={"1"} bgColor="#F3A416"/></TouchableOpacity>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("LevelTwo")}>
                                    <LevelCard levelNumber={"2"} bgColor="#875f18"/>
                                </TouchableOpacity>
                                    <LevelCard levelNumber={"3"} bgColor="#875f18"/>
                                
                            </View>
                            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
                                <LevelCard levelNumber={"4"} bgColor="#875f18"/>
                                <LevelCard levelNumber={"5"} bgColor="#875f18"/>
                                <LevelCard levelNumber={"6"} bgColor="#875f18"/>
                            </View>
                            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
                                <LevelCard levelNumber={"7"} bgColor="#875f18"/>
                                <LevelCard levelNumber={"8"} bgColor="#875f18"/>
                                <LevelCard levelNumber={"9"} bgColor="#875f18"/>
                            </View>
                            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
                                <LevelCard levelNumber={"10"} bgColor="#875f18"/>
                                <LevelCard levelNumber={"11"} bgColor="#875f18"/>
                                <LevelCard levelNumber={"12"} bgColor="#875f18"/>
                            </View>
                        </View>
                    </View>
                    
                </View>


                </ImageBackground>
            </View>
        );
    }

} 