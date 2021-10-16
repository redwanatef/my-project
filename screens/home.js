import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native';//Image
import FinalNumber from './finalNumber';
import { useNavigation } from '@react-navigation/native';


const Home = () => {
    const [number, setNumber] = useState(0)
    
    const pressHandler = () => {
        setNumber(number + 1)
    }
    const navigation = useNavigation();

    const confirmHandler = () => {
        console.log(number);
        navigation.navigate("Dashboard" , number)
    }
    return (
        <View >
            <View style={styles.note}>
                <Text style={{ fontSize: 30, color: "white" }} >note : press on the number to increase</Text>
            </View>

            <View style={styles.counter}>
                <TouchableOpacity onPress={pressHandler}>
                    <Text style={{ fontWeight: 'bold', fontSize: 300 }}>{number}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={confirmHandler}>
                    <Text style={{ color: "white", fontSize: 20 }}>confirm</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setNumber(0)}>
                    <Text style={{ color: "white", fontSize: 20 }}>reset</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    note: {
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#888888",
        width: "100%",
        borderRadius: 15,
        padding: 5
    },
    counter: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        elevation: 3,
        backgroundColor: 'black',
        borderRadius: 8,
        margin: 5,
    },
});


export default Home;