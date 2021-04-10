import React from 'react';
import {View, TouchableOpacity, Text,Pressable,Image, ImageBackground, TextInput, StatusBar, TouchableHighlight} from 'react-native';


export default class Menu extends React.Component{
    constructor(){
        super();
        this.state = {};
    }

    render(){
        return(
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <StatusBar barStyle={"light-content"}/>
                <ImageBackground  source={require("../app/images/bg2.jpeg")} style={{width: "100%", height: "100%"}}> 
                <View style={{flex:0.10, width:"30%", justifyContent:'flex-end', marginHorizontal:"25%", marginLeft:"-5%", marginTop:"3%"}}>
                    <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}} onPress={() => this.props.navigation.navigate("Login")}>
                            <Image source={require("../app/images/logout_icon.png")} style={{width: "57%", height: "57%"}} resizeMode='contain'/>
                    </TouchableOpacity>
                </View>
                 <View style={{flex: 0.80, width:"74%", flexDirection: 'column', alignItems:'center', marginHorizontal:"13%", justifyContent:'center'}}>
                     <View style={{width:'100%', height:'60%', justifyContent:'space-around', alignItems:'center', marginBottom:'10%'}}>
                             <TouchableOpacity style={{backgroundColor:'#F3A416', width:"80%",height:70, borderRadius:20}} onPress={()=>this.props.navigation.navigate("Levels")}>
                                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start', width:"100%",height:70, borderRadius:20, overflow:'hidden'}}>
                                    <Image source={require("../app/images/levels_icon.png")} style={{height:35,width:35, marginLeft:'15%'}} resizeMode='center'/>
                                    <Text style={{color:'white', fontFamily:'bold-font', fontSize:27,marginLeft:'10%'}}>LEVELS</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:'#F3A416', width:"80%",height:70, borderRadius:20}}>
                                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start', width:"100%",height:70, borderRadius:20, overflow:'hidden'}}>
                                    <Image source={require("../app/images/ranking_icon.png")} style={{height:35,width:35, marginLeft:'15%'}} resizeMode='center'/>
                                    <Text style={{color:'white', fontFamily:'bold-font', fontSize:27, marginLeft:'10%'}}>RANKING</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:'#F3A416', width:"80%",height:70, borderRadius:20}}>
                                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start', width:"100%",height:70, borderRadius:20, overflow:'hidden'}}>
                                    <Image source={require("../app/images/brain_icon.png")} style={{height:35,width:35, marginLeft:'15%'}} resizeMode='center'/>
                                    <Text style={{color:'white', fontFamily:'bold-font', fontSize:27, marginLeft:'10%'}}>TRAINING</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:'#F3A416', width:"80%",height:70, borderRadius:20}}  onPress={()=>this.props.navigation.navigate("Help")}>
                                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start', width:"100%",height:70, borderRadius:20, overflow:'hidden'}}>
                                    <Image source={require("../app/images/help_icon.png")} style={{height:35,width:35, marginLeft:'15%'}} resizeMode='center'/>
                                    <Text style={{color:'white', fontFamily:'bold-font', fontSize:27, marginLeft:'10%'}}>HELP</Text>
                                </View>
                            </TouchableOpacity>
                     </View>
                 </View>
                 <View style={{flex: 0.2, flexDirection: 'row', marginTop:"-20%", alignItems:'center'}}>
                    <Image source={require("../app/images/logo1.png")} style={{width: "33%", height: "33%", marginTop:"-30%", marginLeft:"17%"}} resizeMode='contain'/>
                    <Text style={{color:'white',fontFamily:'bold-font', fontSize:30, marginTop:"-21%",marginLeft:"-14%"}}>SoftMINDS</Text>
                 </View>
                </ImageBackground> 
             </View>
        );
    }
}