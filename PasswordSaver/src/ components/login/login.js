
import React, { useState } from "react";
import {
    View,
    Text,
    Button,
    SafeAreaView,
    ScrollView,
    TextInput,
    Image,
    StyleSheet
}
    from "react-native";


import ViewOne from "../ViewOne";
export default function LoginScreen({ navigation }) {
    const [name, setName] = useState('');
    const [luckyNumber, onChangeNum] = useState();
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scroller}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/Beautiful_waterfall.jpeg')}
                        style={styles.image}></Image>
                        <Text> Start with login</Text>
                </View>
                
                <View>
                    <TextInput // to take input from user
                        style={styles.input}
                        placeholder="Enter User ID"
                        onChangeText={name => setName(name)}
                        defaultValue={name}
                    />
                
                    <TextInput
                        style={styles.input}
                        placeholder='Enter Password'
                        onChangeText={onChangeNum}
                        keyboardType='default'
                    />
                    <Text> Hello! {name}, How are you? your lucky number is {luckyNumber}</Text>
                </View>
                
                {/* <Image source={ImgSrc} style={styles.image} /> */}

                <Button title='Login' onPress={() => navigation.navigate("Login")}
                    style={styles.buttonLogin} />
                    <Text style={styles.registerContainer} onPress={() => navigation.navigate("Register", 
                    {message: "User is New", id:12})}
                    > do not have account? click here to regsiter!</Text>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    scroller: {
        marginHorizontal: 4,
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: { flex: 1 },
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        borderWidth: 2,
        borderColor: 'red'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'green'
    },
    image: {
        height: 200,
        width: 200,
        borderRadius: 4
    },
    registerContainer: {
        flex: 1,
        alignItems: 'flex-end',
        textAlign: 'right',
        margin: 10
    },
    input: {
        padding: 10,
        height: 40,
        margin: 12,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: 'gray'
    },
    buttonLogin: {
        marginBottom: 20,
        borderRadius: 6,
        height: 40,
        marginEnd: 20,
        marginStart: 20
    }
})
