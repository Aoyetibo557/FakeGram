import React, { useContext } from 'react'
import {StyleSheet, View, Text, Image, Pressable } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import ProfileImage from "../assets/profileImage.jpg";
import { AuthContext } from './context';
import PixelGrid from './PixelGrid';


function Profile() {

    const { user, setUser} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <View style={styles.profileTop}>
                <Image style={styles.profileImage} source={ProfileImage} />
                <Text style={styles.profileName}>{user}</Text>
                <Text style={styles.profileDescription}>This is a short description about me and what i like to do and overall information I would like to put out there</Text>

            </View>

            <View>
                <ScrollView style={{}}>
                    <PixelGrid />
                </ScrollView>

            </View>

            <View >
                <Pressable onPress={() => setUser(false)}>
                   <Text style={styles.logoutBtn}>Logout</Text>
                </Pressable>
            </View>

        
        </View>
    )
}

export default Profile


const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        paddingTop: 50,

    },

    profileTop:{
        flexDirection:"column",
        alignItems:"center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 20,

    },  

    profileImage: {
        width: 140,
        height: 140,
        borderRadius: 999,
    },

    profileName: {
        fontSize: 17,
        fontWeight: "600",
    },
    profileDescription: {
        fontSize: 14,
        fontWeight: "300",
        width: 400,
        textAlign: "center",
    },
    pixelGrid: {
        marginBottom: 20,
    },

    logoutBtn: {
        padding: 10,
        backgroundColor: "#007AFF",
        height: 40,
        color: "#fff",
        textAlign: 'center',
        fontWeight: "600",
        fontSize: 19,
        marginTop: 20,
    }
})