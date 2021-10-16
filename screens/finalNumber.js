import React from 'react';
import {View , Text , StyleSheet} from 'react-native'


const FinalNumber = ({navigation , route}) => {
    console.log(route.params.number);
    console.log(route);
    return ( 
        <View>
            <Text style={styles.personalInfo}>
                final number is {route.params}
            </Text>
        </View>
     );
}
 
export default FinalNumber;

const styles = StyleSheet.create({
    personalInfo : {
        margin: 10 , 
        fontSize : 20,
        fontWeight : 'bold'
    }
})