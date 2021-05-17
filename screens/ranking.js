import React from 'react';
import {ImageBackground, View, Text, Image, Pressable, LogBox} from 'react-native';
import * as firebase from "firebase";

LogBox.ignoreAllLogs();
LogBox.ignoreLogs(['Warning: ...']);

export default class Ranking extends React.Component{
    constructor(){
        super();
        this.rankingSortedArray = [];

        this.firstPlace = {
            score: 0,
            username:"",
        }
        this.secondPlace = {
            score: 0,
            username:"",
        }
        this.thirdPlace = {
            score: 0,
            username:"",
        }
        this.fourthPlace = {
            score: 0,
            username:"",
        }
        this.fifthPlace = {
            score: 0,
            username:"",
        }

        this.state={
            firstPlaceUsername: '',
            firstPlaceScore: 0,

            secondPlaceUsername: '',
            seconddlaceScore: 0,

            thirdPlaceUsername: '',
            thirdPlaceScore: 0,

            fourthPlaceUsername: '',
            fourthPlaceScore: 0,

            fifthPlaceUsername: '',
            fifthPlaceScore: 0,
        };
    };


    componentDidMount(){
        this.handleGetRanking();
    }

    handleGetRanking = () => {
        firebase.database().ref('/ranking').once('value').then((snapshot) => {

            var tempArray = [];

            snapshot.forEach((childSnapshot) =>{

                var rankingObjectTemp = {
                    score: 0,
                    username:''
                }

                rankingObjectTemp.score = childSnapshot.val().score;
                rankingObjectTemp.username = childSnapshot.val().username;

                tempArray.push(rankingObjectTemp);
            })

            tempArray.sort( (a, b) => (a.score > b.score) ? -1 : 1 );

            this.firstPlace.score = tempArray[0].score;
            this.firstPlace.username = tempArray[0].username; 

            this.secondPlace.score = tempArray[1].score;
            this.secondPlace.username = tempArray[1].username;

            this.thirdPlace.score = tempArray[2].score;
            this.thirdPlace.username = tempArray[2].username;

            this.fourthPlace.score = tempArray[3].score;
            this.fourthPlace.username = tempArray[3].username;

            this.fifthPlace.score = tempArray[4].score;
            this.fifthPlace.username = tempArray[4].username

           this.setState({
               firstPlaceScore:this.firstPlace.score,
               firstPlaceUsername:this.firstPlace.username,
           
               secondPlaceScore:this.secondPlace.score,
               secondPlaceUsername:this.secondPlace.username,

               thirdPlaceScore:this.thirdPlace.score,
               thirdPlaceUsername:this.thirdPlace.username,

               fourthPlaceScore:this.fourthPlace.score,
               fourthPlaceUsername:this.fourthPlace.username,

               fifthPlaceScore:this.fifthPlace.score,
               fifthPlaceUsername:this.fifthPlace.username,
            })
        })
    }

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
                                <View style={{flex:0.15, alignItems:'center', justifyContent:'center'}}>
                                    <Text style={{fontFamily:'bold-font',fontSize:25, color:"#1a1a1a"}}>1</Text>
                                </View>
                                <View style={{flex:0.7}}>
                                    <Text style={{fontFamily:'bold-font',fontSize:25, color:"#fff"}}>{this.state.firstPlaceUsername}</Text>
                                    <Text style={{fontFamily:'bold-font',fontSize:19, color:"#1a1a1a"}}>{this.state.firstPlaceScore < 12 ? "Newbie" : 
                                                                                                          ( this.state.firstPlaceScore >= 12  && this.state.firstPlaceScore <= 23 ) ? "Intermediate" :
                                                                                                                this.state.firstPlaceScore > 23 ? "Master" : null    
                                                                                                        }
                                    </Text>
                                </View>
                                <View style={{flex:0.15, alignItems:'center', justifyContent:'center'}}>
                                    <Text style={{fontFamily:'bold-font',fontSize:25, color:"#1a1a1a"}}>{this.state.firstPlaceScore}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{backgroundColor:'#F3A416', width:"80%",height:80, borderRadius:20, top:25, alignItems:'center'}}>
                            <View style={{flex:1, flexDirection:'row',justifyContent:'space-around',width:"100%",height:"100%",alignItems:'center'}}>
                            <View style={{flex:0.15, alignItems:'center', justifyContent:'center'}}>
                                    <Text style={{fontFamily:'bold-font',fontSize:25, color:"#1a1a1a"}}>2</Text>
                                </View>
                                    <View style={{flex:0.7}}>
                                        <Text style={{fontFamily:'bold-font',fontSize:25, color:"#fff"}}>{this.state.secondPlaceUsername}</Text>
                                        <Text style={{fontFamily:'bold-font',fontSize:19, color:"#1a1a1a"}}>{this.state.secondPlaceScore < 12 ? "Newbie" : 
                                                                                                            ( this.state.secondPlaceScore >= 12  && this.state.secondPlaceScore <= 23 )? "Intermediate" :
                                                                                                                this.state.secondPlaceScore > 23 ? "Master" : null    
                                                                                                        }</Text>
                                    </View>
                                    <View style={{flex:0.15, alignItems:'center', justifyContent:'center'}}>
                                    <Text style={{fontFamily:'bold-font',fontSize:25, color:"#1a1a1a"}}>{this.state.secondPlaceScore}</Text>
                                    </View>
                                </View>   
                        </View>
                        <View style={{backgroundColor:'#F3A416', width:"80%",height:80, borderRadius:20, top:25, alignItems:'center'}}>
                            <View style={{flex:1, flexDirection:'row',justifyContent:'space-around',width:"100%",height:"100%",alignItems:'center'}}>
                            <View style={{flex:0.15, alignItems:'center', justifyContent:'center'}}>
                                    <Text style={{fontFamily:'bold-font',fontSize:25, color:"#1a1a1a"}}>3</Text>
                                    </View>
                                    <View style={{flex:0.7}}>
                                        <Text style={{fontFamily:'bold-font',fontSize:25, color:"#fff"}}>{this.state.thirdPlaceUsername}</Text>
                                        <Text style={{fontFamily:'bold-font',fontSize:19, color:"#1a1a1a"}}>{this.state.thirdPlaceScore < 12 ? "Newbie" : 
                                                                                                            ( this.state.thirdPlaceScore >= 12  && this.state.thirdPlaceScore <= 23 ) ? "Intermediate" :
                                                                                                                this.state.thirdPlaceScore > 23 ? "Master" : null    
                                                                                                        }</Text>
                                    </View>
                                    <View style={{flex:0.15, alignItems:'center', justifyContent:'center'}}>
                                    <Text style={{fontFamily:'bold-font',fontSize:25, color:"#1a1a1a"}}>{this.state.thirdPlaceScore}</Text>
                                    </View>
                                </View>           
                        </View>
                        <View style={{backgroundColor:'#F3A416', width:"80%",height:80, borderRadius:20, top:25, alignItems:'center'}}>
                            <View style={{flex:1, flexDirection:'row',justifyContent:'space-around',width:"100%",height:"100%",alignItems:'center'}}>
                            <View style={{flex:0.15, alignItems:'center', justifyContent:'center'}}>
                                    <Text style={{fontFamily:'bold-font',fontSize:25, color:"#1a1a1a"}}>4</Text>
                                    </View>
                                    <View style={{flex:0.7}}>
                                        <Text style={{fontFamily:'bold-font',fontSize:25, color:"#fff"}}>{this.state.fourthPlaceUsername}</Text>
                                        <Text style={{fontFamily:'bold-font',fontSize:19, color:"#1a1a1a"}}>{this.state.fourthPlaceScore < 12 ? "Newbie" : 
                                                                                                            ( this.state.fourthPlaceScore >= 12  && this.state.fourthPlaceScore <= 23 ) ? "Intermediate" :
                                                                                                                this.state.fourthPlaceScore > 23 ? "Master" : null    
                                                                                                        }</Text>
                                    </View>
                                    <View style={{flex:0.15, alignItems:'center', justifyContent:'center'}}>
                                    <Text style={{fontFamily:'bold-font',fontSize:25, color:"#1a1a1a"}}>{this.state.fourthPlaceScore}</Text>
                                    </View>
                                </View>            
                            </View>
                        <View style={{backgroundColor:'#F3A416', width:"80%",height:80, borderRadius:20, top:25, alignItems:'center'}}>
                            <View style={{flex:1, flexDirection:'row',justifyContent:'space-around',width:"100%",height:"100%",alignItems:'center'}}>
                            <View style={{flex:0.15, alignItems:'center', justifyContent:'center'}}>
                                    <Text style={{fontFamily:'bold-font',fontSize:25, color:"#1a1a1a"}}>5</Text>
                                    </View>
                                    <View style={{flex:0.7}}>
                                        <Text style={{fontFamily:'bold-font',fontSize:25, color:"#fff"}}>{this.state.fifthPlaceUsername}</Text>
                                        <Text style={{fontFamily:'bold-font',fontSize:19, color:"#1a1a1a"}}>{this.state.fifthPlaceScore < 12 ? "Newbie" : 
                                                                                                            ( this.state.fifthPlaceScore >= 12  && this.state.fifthPlaceScore <= 23 ) ? "Intermediate" :
                                                                                                                this.state.fifthPlaceScore > 23 ? "Master" : null    
                                                                                                        }</Text>
                                    </View>
                                    <View style={{flex:0.15, alignItems:'center', justifyContent:'center'}}>
                                    <Text style={{fontFamily:'bold-font',fontSize:25, color:"#1a1a1a"}}>{this.state.fifthPlaceScore}</Text>
                                    </View>
                                </View>              
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }

} 
