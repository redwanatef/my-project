import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity , Pressable } from 'react-native';//Image

const PersonalInfo = () => {
    return ( 
        <View>
            <Text style={styles.personalInfo} >name : Redwan ahmed mohamed<br/>
            email : r@gmail.com<br/>
            phone : 01100760272</Text>
        </View>
     );
}
 
export default PersonalInfo;

const styles = StyleSheet.create({
    personalInfo : {
        margin: 10 , 
        fontSize : 20,
        fontWeight : 'bold'
    }
})