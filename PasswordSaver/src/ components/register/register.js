import React from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
}
    from "react-native";


export default function RegsiterScreen({ route, navigation }) {
    const message = JSON.stringify(route.params.message);
    const id  = JSON.stringify(route.params.id);
    return (

        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Details Screen: - {message}, your id is {id}</Text>
            <Button
                title="Go to Login again"
                onPress={() => navigation.push('Login')}
            />
            <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <Button
                title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()}
            />
        </View>

    )
}

