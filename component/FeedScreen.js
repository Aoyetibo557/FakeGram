import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View, Text,Image, Button } from 'react-native'
import HomeImage from "../assets/adaptive-icon.png";


function FeedScreen() {
    const nav = useNavigation();
    return (
        <View style={styles.layout}>
            <Text>This is a Filler Page. Go back!</Text>
            
        </View>
    )
}

export default FeedScreen

const styles = StyleSheet.create({
    layout: {
        flex: 2,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },

    logoText: {
        fontSize: 20,
        fontWeight: "600",
    },

    logoImage: {
        width: 200,
        height:200,
    },

   
})
