import React, { useState } from 'react'
import { StyleSheet,View, Text, Button, ScrollView } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import SearchIcon from "react-native-vector-icons/Feather"
function Search() {
    const [text, setText] = useState();
    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <SearchIcon name='search' size={20} color="#999" />
                <TextInput style={styles.text} value={text} editable onChangeText={(e) => setText(e)} onEndEditing={() => alert("dONE")} placeholder={`Search "coffee" `} />
            </View>

            <View>
                {/* Results */}
                <Text>{text}</Text>
            </View>
        </View>
    )
}

export default Search


const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        padding: 10,
        paddingTop: 50,

    },

    searchBar: {
        flexDirection: "row",
        alignItems: "center",
        height: 40,
        padding:3,
        borderColor: "#000",
        borderWidth: 0.2,
        borderRadius: 9,
    },

    text: {
        fontSize: 16,
        marginLeft: 10,
        width: 360,
    },



})