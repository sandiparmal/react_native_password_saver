import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../ components/login/login";
import RegsiterScreen from "../ components/register/register";

// createNativeStackNavigator is a function which returns a React component after accepting route configuration object.
const Stack = createNativeStackNavigator();

export default function StackRouter() {
    return (
        <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Register' component={RegsiterScreen}/>
        <Stack.Screen name='Login' component={LoginScreen}/>
    </Stack.Navigator>
    )
}