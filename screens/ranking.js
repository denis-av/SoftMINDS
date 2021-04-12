import React from 'react';
import {ImageBackground, View, Text, Image, Pressable, TouchableOpacity} from 'react-native';
import LevelCard from "../components/level-card";

export default class Ranking extends React.Component{
    constructor(){
        super();
        this.state={};
    };

    render(){
        return(
            <View style={{flex: 1}}>
                <ImageBackground source={require("../app/images/bg1.png")} style={{width:"100%", height:"100%"}}>
                <View style={{flex: 0.13, backgroundColor:"#F3A416", flexDirection:'row', alignItems:'flex-end'}}>
                        <Pressable style={{flex: 0.25, height:"75%", alignItems:'center', justifyContent:'center'}} onPress={() => this.props.navigation.navigate("Menu")}>
                            <Image source={require("../app/images/back-2.png")} resizeMode = "center" style={{width:"35%", height:"35%"}}/>
                        </Pressable>
                    <View style={{flex: 0.50, height:"75%", alignItems:'center', justifyContent:'center'}}>
                        <Text style={{fontSize: 40, color:"white", fontFamily:"bold-font"}}>RANKING</Text>
                    </View>
                </View>
                    <View style={{flex:0.57,flexDirection:'column', justifyContent:'space-around',alignItems:'center'}}>
                        <View style={{backgroundColor:'#F3A416', width:"80%",height:80, borderRadius:20, top:25, alignItems:'center'}}>
                            <View style={{flex:1, flexDirection:'row',justifyContent:'space-around',width:"100%",height:"100%",alignItems:'center'}}>
                                <Text style={{fontFamily:'bold-font',fontSize:25, color:"#1a1a1a"}}>1</Text>
                                <View style={{left:-30}}>
                                    <Text style={{fontFamily:'bold-font',fontSize:25, color:"#fff"}}>Player 1</Text>
                                    <Text style={{fontFamily:'bold-font',fontSize:19, color:"#1a1a1a"}}>Master</Text>
                                </View>
                                <Text style={{fontFamily:'bold-font',fontSize:25, color:"#1a1a1a"}}>36</Text>
                            </View>
                        </View>
                        <View style={{backgroundColor:'#F3A416', width:"80%",height:80, borderRadius:20, top:25, alignItems:'center'}}>
                            <View style={{flex:1, flexDirection:'row',justifyContent:'space-around',width:"100%",height:"100%",alignItems:'center'}}>
                                    <Text style={{fontFamily:'bold-font',fontSize:25, color:"#1a1a1a"}}>1</Text>
                                    <View style={{left:-30}}>
                                        <Text style={{fontFamily:'bold-font',fontSize:25, color:"#fff"}}>Player 1</Text>
                                        <Text style={{fontFamily:'bold-font',fontSize:19, color:"#1a1a1a"}}>Master</Text>
                                    </View>
                                    <Text style={{fontFamily:'bold-font',fontSize:25, color:"#1a1a1a"}}>36</Text>
                                </View>   
                        </View>
                        <View style={{backgroundColor:'#F3A416', width:"80%",height:80, borderRadius:20, top:25, alignItems:'center'}}>
                            <View style={{flex:1, flexDirection:'row',justifyContent:'space-around',width:"100%",height:"100%",alignItems:'center'}}>
                                    <Text style={{fontFamily:'bold-font',fontSize:25, color:"#1a1a1a"}}>1</Text>
                                    <View style={{left:-30}}>
                                        <Text style={{fontFamily:'bold-font',fontSize:25, color:"#fff"}}>Player 1</Text>
                                        <Text style={{fontFamily:'bold-font',fontSize:19, color:"#1a1a1a"}}>Master</Text>
                                    </View>
                                    <Text style={{fontFamily:'bold-font',fontSize:25, color:"#1a1a1a"}}>36</Text>
                                </View>           
                        </View>
                        <View style={{backgroundColor:'#F3A416', width:"80%",height:80, borderRadius:20, top:25, alignItems:'center'}}>
                            <View style={{flex:1, flexDirection:'row',justifyContent:'space-around',width:"100%",height:"100%",alignItems:'center'}}>
                                    <Text style={{fontFamily:'bold-font',fontSize:25, color:"#1a1a1a"}}>1</Text>
                                    <View style={{left:-30}}>
                                        <Text style={{fontFamily:'bold-font',fontSize:25, color:"#fff"}}>Player 1</Text>
                                        <Text style={{fontFamily:'bold-font',fontSize:19, color:"#1a1a1a"}}>Master</Text>
                                    </View>
                                    <Text style={{fontFamily:'bold-font',fontSize:25, color:"#1a1a1a"}}>36</Text>
                                </View>            
                            </View>
                        <View style={{backgroundColor:'#F3A416', width:"80%",height:80, borderRadius:20, top:25, alignItems:'center'}}>
                            <View style={{flex:1, flexDirection:'row',justifyContent:'space-around',width:"100%",height:"100%",alignItems:'center'}}>
                                    <Text style={{fontFamily:'bold-font',fontSize:25, color:"#1a1a1a"}}>1</Text>
                                    <View style={{left:-30}}>
                                        <Text style={{fontFamily:'bold-font',fontSize:25, color:"#fff"}}>Player 1</Text>
                                        <Text style={{fontFamily:'bold-font',fontSize:19, color:"#1a1a1a"}}>Master</Text>
                                    </View>
                                    <Text style={{fontFamily:'bold-font',fontSize:25, color:"#1a1a1a"}}>36</Text>
                                </View>              
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }

} 