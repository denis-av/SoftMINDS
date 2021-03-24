import React from 'react';
import {View, TouchableOpacity, Text,Pressable,Image, ImageBackground, TextInput, StatusBar} from 'react-native';

export default class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            username: "",
            password: "",
        };
    }

    handleUsername = (text) => {this.setState({username: text})};
    handlePassword = (text) => {this.setState({password: text})};

    render(){
        return(
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
               <StatusBar barStyle={"light-content"}/>
               <ImageBackground  source={require("../app/images/bg3.jpeg")} style={{width: "100%", height: "100%"}}> 
                 <View style={{flex: 0.3, flexDirection: 'row', marginTop: 70, alignItems:'center'}}>
                    <Image source={require("../app/images/logo1.png")} style={{width: "33%", height: "33%"}} resizeMode='contain'/>
                    <Text style={{color:'white',fontFamily:'bold-font', fontSize:59, marginTop:"17%",marginLeft:"-13%"}}>SoftMINDS</Text>
                 </View>
                 <View style={{flex: 0.35, flexDirection: 'column', alignItems:'center',marginTop:"10%"}}>
                    <View style={{flex: 0.33, width:"80%", marginHorizontal:"10%", justifyContent:'center'}}>
                        <View style={{flexDirection:'row', alignItems:'center', borderWidth:2, borderTopWidth:0, borderLeftWidth:0, borderRightWidth:0, height:"50%",borderColor:'white'}}>
                            <Image source={require("../app/images/user.png")} resizeMode='contain' style={{width:"65%", height:"65%", marginLeft:"-27%"}}/>
                            <TextInput placeholder="Username" 
                                       placeholderTextColor="white"
                                       style={{color: 'white', marginLeft:"-21%",fontSize:19, fontFamily:'bold-font'}}
                                       value={this.state.username}
                                       onChangeText={this.handleUsername}
                            />
                        </View>
                    </View>
                    <View style={{flex: 0.33, width:"80%", marginHorizontal:"10%", justifyContent:'center'}}>
                        <View style={{flexDirection:'row', alignItems:'center', borderWidth:2, borderTopWidth:0, borderLeftWidth:0, borderRightWidth:0, height:"50%",borderColor:'white'}}>
                            <Image source={require("../app/images/password.png")} resizeMode='contain' style={{width:"60%", height:"60%", marginLeft:"-24%"}}/>
                            <TextInput placeholder="Password" 
                                       placeholderTextColor="white"
                                       secureTextEntry={true}
                                       style={{color: 'white', marginLeft:"-19%",fontSize:19, fontFamily:'bold-font'}}
                                       value={this.state.password}
                                       onChangeText={this.handlePassword}
                            />
                        </View>
                    </View>
                 </View>
                 <View style={{flex:0.10, justifyContent:'flex-end',marginTop:"-20%"}}>
                    <Pressable style={{backgroundColor: '#F3A416', alignItems:'center', width:"50%", marginHorizontal:"25%", height:47, justifyContent:'center', borderRadius:30}}
                               onPress={() => this.props.navigation.navigate("Menu")}  > 
                        <Text style={{color:'white', fontFamily:'bold-font', fontSize:17}}>LOGIN</Text>
                    </Pressable>
                 </View>
               </ImageBackground> 
            </View>
        );
    }
}