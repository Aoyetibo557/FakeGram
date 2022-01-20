import React, {useState} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'

function Stories({pic, username}) {
    const [ viewed, setViewed] = useState(false)

    return (
        <View style={styles.container}>
            <TouchableHighlight onPress={() => setViewed(!viewed)}>
                <Image  style={!viewed ? styles.image : styles.viewedImage} source={{uri: pic}}  />
            </TouchableHighlight>
            <Text style={styles.user}>{username}</Text>
        </View>
    )
}

export default Stories


const styles = StyleSheet.create({
    container :{
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10,
        
    },

    image: {
        width: 70,
        height: 70,
        borderRadius: 999,
        borderColor: "green",
        borderWidth: 2,
    },
    viewedImage: {
        width: 70,
        height: 70,
        borderRadius: 999,
        borderColor: "whitesmoke",
        borderWidth: 2,
    },  

    user: {
        fontSize: 12,
        fontWeight: "500",
    }
})