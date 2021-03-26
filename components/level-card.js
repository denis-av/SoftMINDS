import React from 'react';
import {View, Text} from 'react-native';

export default class LevelCard extends React.Component{
    constructor(){
        super();
        this.state = {};
    };
    render(){
        return(
            <View style={{height: 90, width:90, borderRadius:20, backgroundColor:this.props.bgColor, alignItems:'center', justifyContent:'center'}}>
                <Text style={{color:'white', fontSize: 35, fontFamily:'bold-font'}}>{this.props.levelNumber}</Text>
            </View>
        );
    }
}