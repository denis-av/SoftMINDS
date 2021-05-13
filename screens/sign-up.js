import React from 'react';
import {View, TouchableOpacity, Text,Pressable,Image, ImageBackground, TextInput, StatusBar, LogBox, Alert} from 'react-native';
import * as firebase from "firebase";

LogBox.ignoreAllLogs();
LogBox.ignoreLogs(['Warning: ...']);

export default class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            email: "",
            password: "",
            error: "",
            loading: false
        };
    }

    //componentDidMount(){this.setState({email:"",password:""})};
    handleEmail = (text) => {this.setState({email: text})};
    handlePassword = (text) => {this.setState({password: text})};

    SignUpPress = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then(() => {
            this.createIndividualTable();
            this.props.navigation.navigate('Login');
        })
        .catch(error => Alert.alert("Error",
                                    error.message,
                                    [
                                        {
                                            text:'Ok',
                                            onPress: () => this.props.navigation.navigate("SignUP")
                                        }
                                    ]))
    }

    createIndividualTable = () => {
        const username = this.state.email.split("@")[0].replace('.','').replace('_','');
        const childPath = "/" + username;
        //childPath = childPath.replace('_','');
        firebase.database().ref("/users").child(childPath).set({
            username: username,
            levelOne: "",
            levelTwo: "",
            levelThree: "",
            levelFour: "",
            levelFive: "",
            levelSix: "",
            levelSeven: "",
            levelEight: "",
            levelNine: "",
            levelTen: "",
            levelEleven: "",
            levelTwelve: ""
        }).catch(function (error) {
            console.log("Error:" + error.message);
        })
    }

    render(){
        return(
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
               <StatusBar barStyle={"light-content"}/>
               <ImageBackground  source={require("../app/images/bg1.png")} style={{width: "100%", height: "100%"}}> 
                 <View style={{flex: 0.3, marginTop: 70, alignItems:'center'}}>
                    <Image source={require("../app/images/logo1.png")} style={{width: "70%", height: "70%"}} resizeMode='contain'/>
                 </View>
                 <View style={{flex: 0.30, flexDirection: 'column', alignItems:'center', justifyContent:'center'}}>
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
                 <View style={{flex:0.10, justifyContent:'center'}}>
                    <Pressable style={{backgroundColor: '#F3A416', alignItems:'center', width:"50%", marginHorizontal:"25%", height:47, justifyContent:'center', borderRadius:30}}
                               onPress={this.SignUpPress} > 
                        <Text style={{color:'white', fontFamily:'bold-font', fontSize:17}}>REGISTER</Text>
                    </Pressable>
                 </View>
                 <View style={{flex:0.10, width:"50%", alignItems:'center', justifyContent:'center', marginHorizontal:"25%"}}>
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
