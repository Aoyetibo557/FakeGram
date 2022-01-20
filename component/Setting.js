import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import {  useNavigation } from "@react-navigation/native";


const Stack = createStackNavigator();

function Setting() {
    const nav = useNavigation();
    return (
        <View>
            <View>
               <Button title='Notifications' onPress={() => nav.navigate('Setting', {screen: 'Notifications'})} />
               <Button title='Privacy' onPress={() => nav.navigate('Setting', {screen: 'Privacy'})} />
               <Button title='Security' onPress={() => nav.navigate('Setting', {screen: 'Security'})} />
               <Button title='Account' onPress={() => nav.navigate('Setting', {screen: 'Account'})} />
               <Button title='Help' onPress={() => nav.navigate('Setting', {screen: 'Help'})} />
               <Button title='About' onPress={() => nav.navigate('Setting', {screen: 'About'})} />

            </View>
        </View>
    )
}

export default Setting
