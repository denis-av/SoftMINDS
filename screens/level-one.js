import React from 'react';
import {View, ImageBackground, Pressable, Text, Image, TextInput} from 'react-native';
import NumberCard from '../components/number-card';

export default class LevelOne extends React.Component{
    constructor(){
        super();
        this.state = {
            answer: ""
        };
    };

    handleAnswer = (text) => {this.setState({answer: text})};

    render(){
        return(
            <View style={{flex:1}}>
                <ImageBackground source={require("../app/images/bg4.png")} style={{width:"100%", height:"100%"}}>
                    <View style={{flex: 0.13, backgroundColor:"#F3A416", flexDirection:'row', alignItems:'flex-end'}}>
                            <Pressable style={{flex: 0.25, height:"75%", alignItems:'center', justifyContent:'center'}} onPress={() => this.props.navigation.navigate("Levels")}>
                                <Image source={require("../app/images/back-2.png")} resizeMode = "center" style={{width:"35%", height:"35%"}}/>
                            </Pressable>
                        <View style={{flex: 0.50, height:"75%", alignItems:'center', justifyContent:'center'}}>
                            <Text style={{fontSize: 40, color:"white", fontFamily:"bold-font"}}>LEVEL 1</Text>
                        </View>
                    </View>
                    <View style={{flex: 0.09, alignItems:'center', justifyContent:'center'}}>
                        <Text style={{fontSize:35, color:'white', fontFamily:'bold-font'}}>00:10</Text>
                    </View>
                    <View style={{flex: 0.50, backgroundColor:'blue'}}>

                    </View>
                    <View style={{flex: 0.10,  flexDirection:'row', alignItems:'flex-end', justifyContent: 'space-around'}}>
                        <View style={{flexDirection:'row', alignItems:'center', borderWidth:2, borderTopWidth:0, borderLeftWidth:0, borderRightWidth:0, height:"50%",borderColor:'white', width:"48%", marginLeft:"7%"}}>
                            <TextInput placeholder="Answer here" 
                                       placeholderTextColor="#696969"
                                       style={{color: '#696969',fontSize:21, fontFamily:'bold-font'}}
                                       value={this.state.answer}
                                       onChangeText={this.handleAnswer}
                            />
                            <Image source={require("../app/images/x.png")} resizeMode = "contain" style={{width:"40%", height:"40%", marginLeft:"14%"}}/>
                        </View>
                        
                        <Pressable style={{backgroundColor: '#F3A416', height:"70%", width:"31%", alignItems:'center', justifyContent:'center', marginRight:"7%"}}  onPress={() => console.log("aaa")} >
                            <Text style={{fontSize: 25, fontFamily:'bold-font', color:'white'}}>SUBMIT</Text>
                        </Pressable>
                    </View>
                    <View style={{flex: 0.22, justifyContent:'space-around', alignContent:'center', marginHorizontal:"7%"}}>
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around', marginTop:"5%"}}>
                            <NumberCard number={"0"} bgColor="#F3A416"/>
                            <NumberCard number={"1"} bgColor="#F3A416"/>
                            <NumberCard number={"2"} bgColor="#F3A416"/>
                            <NumberCard number={"3"} bgColor="#F3A416"/>
                            <NumberCard number={"4"} bgColor="#F3A416"/>
                        </View>
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around', marginBottom:"10%"}}>
                            <NumberCard number={"5"} bgColor="#F3A416"/>
                            <NumberCard number={"6"} bgColor="#F3A416"/>
                            <NumberCard number={"7"} bgColor="#F3A416"/>
                            <NumberCard number={"8"} bgColor="#F3A416"/>
                            <NumberCard number={"9"} bgColor="#F3A416"/>
                        </View>
                        
                    </View>
                </ImageBackground>
            </View>
        );
    }
}