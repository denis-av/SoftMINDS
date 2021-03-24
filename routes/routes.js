import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from '../screens/sign-up';
import Login from '../screens/login';
import Menu from '../screens/menu';
import Levels from '../screens/levels';

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
                />
                <Stack.Screen name="Levels"
                    component={Levels}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AddIntoStack;