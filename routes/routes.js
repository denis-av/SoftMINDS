import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from '../screens/sign-up';
import Login from '../screens/login';
import Menu from '../screens/menu';
import Levels from '../screens/levels';
import Help from '../screens/help';
import LevelOne from '../screens/level-one';
import LevelTwo from '../screens/level-two';
import LevelThree from '../screens/level-three';
import LevelFour from '../screens/level-four';
import LevelFive from '../screens/level-five';
import LevelSix from '../screens/level-six';
import LevelSeven from '../screens/level-seven';
import LevelEight from '../screens/level-eight';
import LevelNine from '../screens/level-nine';
import LevelTen from '../screens/level-ten';
import LevelEleven from '../screens/level-eleven';
import LevelTwelve from '../screens/level-twelve';
import Ranking from '../screens/ranking';

const Stack = createStackNavigator();
function AddIntoStack(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SignUP" 
                              component={SignUp} 
                              options={({navigation}) => ({
                                  headerShown: false
                              })}
                />
                <Stack.Screen name="Login"
                              component={Login}
                              options={({navigation}) => ({
                                headerShown: false
                            })}
                />
                <Stack.Screen name="Menu"
                    component={Menu}
                    options={({navigation}) => ({
                        headerShown: false
                    })}
                />
                <Stack.Screen name="Levels"
                    component={Levels}
                    options={({navigation}) => ({
                        headerShown: false
                    })}
                />
                <Stack.Screen name="Help"
                    component={Help}
                    options={({navigation}) => ({
                        headerShown: false
                    })}
                />
                <Stack.Screen name="LevelOne"
                    component={LevelOne}
                    options={({navigation}) => ({
                        headerShown: false
                    })}
                />
                <Stack.Screen name="LevelTwo"
                    component={LevelTwo}
                    options={({navigation}) => ({
                        headerShown: false
                    })}
                />
                <Stack.Screen name="LevelThree"
                    component={LevelThree}
                    options={({navigation}) => ({
                        headerShown: false
                    })}
                />
                <Stack.Screen name="LevelFour"
                    component={LevelFour}
                    options={({navigation}) => ({
                        headerShown: false
                    })}
                />
                <Stack.Screen name="LevelFive"
                    component={LevelFive}
                    options={({navigation}) => ({
                        headerShown: false
                    })}
                />
                <Stack.Screen name="LevelSix"
                    component={LevelSix}
                    options={({navigation}) => ({
                        headerShown: false
                    })}
                />
                <Stack.Screen name="LevelSeven"
                    component={LevelSeven}
                    options={({navigation}) => ({
                        headerShown: false
                    })}
                />
                <Stack.Screen name="LevelEight"
                    component={LevelEight}
                    options={({navigation}) => ({
                        headerShown: false
                    })}
                />
                <Stack.Screen name="LevelNine"
                    component={LevelNine}
                    options={({navigation}) => ({
                        headerShown: false
                    })}
                />
                <Stack.Screen name="LevelTen"
                    component={LevelTen}
                    options={({navigation}) => ({
                        headerShown: false
                    })}
                />
                <Stack.Screen name="LevelEleven"
                    component={LevelEleven}
                    options={({navigation}) => ({
                        headerShown: false
                    })}
                />
                <Stack.Screen name="LevelTwelve"
                    component={LevelTwelve}
                    options={({navigation}) => ({
                        headerShown: false
                    })}
                />
                <Stack.Screen name="Ranking"
                    component={Ranking}
                    options={({navigation}) => ({
                        headerShown: false
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AddIntoStack;