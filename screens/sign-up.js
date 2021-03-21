import React from 'react';
import {View, Text} from 'react-native';

export default class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {};
    }
    render(){
        return(
            <View style={{backgroundColor: "red", flex: 1}}>
                <View style={{backgroundColor: "yellow", flex: 0.5, alignItems: 'center', justifyContent: 'space-evenly'}}>
                    <View style={{width:50,height:50, backgroundColor:'black'}}></View>
                    <View style={{width:50,height:50, backgroundColor:'black'}}></View>
                    <View style={{width:50,height:50, backgroundColor:'black'}}></View>
                </View>
                <View style={{backgroundColor: "green", flexDirection: "row", flex: 0.5}}>
                    <View style={{backgroundColor: "blue", flex: 0.5 }}></View>
                </View>
            </View>
        );
    }
}
