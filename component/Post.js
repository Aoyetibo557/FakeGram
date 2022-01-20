import React, {useState} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/AntDesign'
import MessageIcon from 'react-native-vector-icons/Feather'
import BookMarkIcon from 'react-native-vector-icons/Feather'
import PlaneIcon from "react-native-vector-icons/Ionicons";


function Post(props) {
    const [like, setLike] = useState(false);


    return (
        <View style={styles.container, {paddingBottom: 10, paddingTop: 10}}>
            <View style={styles.postTop}>
                <View style={styles.postTopView}>
                    <Image style={styles.postAvatar} source={props.image} />
                    <Text style={styles.postUsername}>{props.username}</Text>
                </View>
                <Icon name='ellipsis1' size={20} color="#000" />
            </View>
            
            <View>
                <Image style={styles.postImage} source={{uri: props.postimage}} />
            </View>

            <View style={styles.iconsContainer}>
                {/* post reactions */}
                <View style={styles.iconsLeft}>
                    <TouchableOpacity onPress={() => setLike(!like)}>
                        <Icon name= {!like ? 'hearto' : 'heart'} size={25} color= {!like ? "#000" : "red"} />
                    </TouchableOpacity>
                    <MessageIcon name='message-circle' size={25} color="#000" />
                    <PlaneIcon name='md-paper-plane-outline' size={25} color="#000" />
                </View>

                <View>
                    <BookMarkIcon name='bookmark' size={25} color="#000" />
                </View>
            </View>
        </View>
    )
}

export default Post


const styles = StyleSheet.create({

    container: {
        flexDirection: "column",
    },

    postTop: {
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        
    },

    postTopView: {
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
        width: 90,
        height: 50,
    },

    postAvatar: {
        width: 30,
        height: 30,
        borderRadius: 999,
        borderWidth: 1,
    },

    postUsername: {
        fontSize:14,
        fontWeight: "500",
    },

    postImage: {
        width: null,
        height: 400,
        resizeMode: "cover",
    },

    iconsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-between",
        height: 50,

    },

    iconsLeft: {
        flexDirection: "row",
        width: 130,
        alignItems: "center",
        justifyContent: "space-evenly"
    }

})