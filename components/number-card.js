import React from 'react';
import {View, Text} from 'react-native';

export default class NumberCard extends React.Component{
    constructor(){
        super();
        this.state = {};
    };
    render(){
        return(
            <View style={{height: 60, width:58, borderRadius:0, backgroundColor:this.props.bgColor, alignItems:'center', justifyContent:'center'}}>
                <Text style={{color:'white', fontSize: 35, fontFamily:'bold-font'}}>{this.props.number}</Text>
            </View>
        );
    }
}