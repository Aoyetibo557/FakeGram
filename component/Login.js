import React, {useContext, useState} from 'react'
import {StyleSheet, View, Text, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { AuthContext } from './context'

function Login() {
    const [ username, setUsername] = useState("")
    const [ pass, setPass] = useState("");
    const [ err, setErr] = useState("");


    const { setUser, setTextUsername } = useContext(AuthContext);

    const handleLogin = () => {
        setErr("");
        if(username.length <= 0 || username === null) {
            setErr("Username Field can not be empty")
        }
        else if(pass.length <= 0 || pass === null) {
            setErr("Password Field can not be empty!")
        }
        else{
            setUser(true);
            setTextUsername(username);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headText}>FakeGram</Text>
            <Text style={styles.errorText}>{err && err}</Text>
            <TextInput style={styles.inputText} value={username} onChangeText={(e) => setUsername(e)} placeholder='Username' editable />
            <TextInput style={styles.inputText} value={pass} onChangeText={(e) => setPass(e)} placeholder='Password' editable />
            <Button title="Login" onPress={handleLogin} />
        </View>
    )
}

export default Login


const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: 'center',
        justifyContent:"center",
        height: 500,
    },

    headText: {
        fontSize: 45,
        fontWeight: "700"
    },

    inputText: {
        padding: 6,
        marginTop: 20,
        height: 50,
        borderColor: "#000",
        borderWidth: 0.3,
        borderRadius: 5,
        width: 400,
        fontSize: 15,
    },
    errorText: {
        color: 'red',
        fontSize: 15,
        fontWeight: "500",
    }
})