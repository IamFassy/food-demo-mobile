//Library
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//Components
import Home from '../Pages/Home/Home';


class Navigation extends Component {
    render() {
        //Stack Navigator
        const Stack = createStackNavigator()
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName={"Home"}>
                    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default Navigation
