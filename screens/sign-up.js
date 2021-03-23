import React from 'react';
import {View, TouchableOpacity, Text,Pressable,Image, ImageBackground, TextInput, StatusBar} from 'react-native';

export default class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            email: "",
            username: "",
            password: ""
        };
    }

    handleUsername = (text) => {this.setState({username: text})};
    handleEmail = (text) => {this.setState({email: text})};
    handlePassword = (text) => {this.setState({password: text})};

    render(){
        return(
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
               <StatusBar barStyle={"light-content"}/>
               <ImageBackground  source={require("../app/images/bg1.png")} style={{width: "100%", height: "100%"}}> 
                 <View style={{flex: 0.3, marginTop: 70, alignItems:'center'}}>
                    <Image source={require("../app/images/logo1.png")} style={{width: "70%", height: "70%"}} resizeMode='contain'/>
                 </View>
                 <View style={{flex: 0.35, flexDirection: 'column', alignItems:'center'}}>
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
                            <Image source={require("../app/images/email.png")} resizeMode='contain' style={{width:"45%", height:"45%", marginLeft:"-17%"}}/>
                            <TextInput placeholder="Email" 
                                       placeholderTextColor="white"
                                       style={{color: 'white', marginLeft:"-11%",fontSize:19, fontFamily:'bold-font'}}
                                       value={this.state.email}
                                       onChangeText={this.handleEmail}
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
                 <View style={{flex:0.10, justifyContent:'flex-end'}}>
                    <Pressable style={{backgroundColor: '#F3A416', alignItems:'center', width:"50%", marginHorizontal:"25%", height:47, justifyContent:'center', borderRadius:30}}
                               onPress={() => console.log("aaa")}  
                    > 
                        <Text style={{color:'white', fontFamily:'bold-font', fontSize:17}}>REGISTER</Text>
                    </Pressable>
                 </View>
                 <View style={{flex:0.10, width:"50%", alignItems:'center', justifyContent:'flex-end', marginHorizontal:"25%"}}>
                    <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}} onPress={() => this.props.navigation.navigate("Login")}>
                            <Text style={{color:'white', fontSize:16, fontFamily:'normal-font'}}>
                                Already have an account?
                            </Text>
                            <Text style={{color:'white', fontSize:17, fontFamily:'bold-font'}}>
                                LOGIN
                            </Text>
                    </TouchableOpacity>
                </View>
               </ImageBackground> 
            </View>
        );
    }
}
