import React from "react";
import { View, Text } from "react-native";
export default function ViewOne(props) {
    return (
        <View
        style = {{
            margin: 5, 
            padding: 5, 
            borderRadius: 6,
            borderWidth: 2, 
            borderColor: 'green'
        }}>
            <Text style={{ fontSize: 18,
            fontWeight:'bold', color:'red'}}> My name is {props.name}</Text>
        </View>
    )
}