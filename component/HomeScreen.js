import React, { useContext } from 'react'
import { StyleSheet,View, Text, Button, ScrollView } from 'react-native'
import Icon  from 'react-native-vector-icons/AntDesign';
import Stories from './Stories';
import StoryImage from "../assets/icon.png";
import Post from './Post';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from './context';



function HomeScreen() {
    const {user } = useContext(AuthContext);
    const nav = useNavigation();

    return (
        <View style={styles.homeContainer}>
            <View style={styles.topBar}>
                <Text style={styles.logo}>FakeGram</Text>
                <View style={styles.topBarButtons}>
                    <Icon onPress={() => alert(" Plus Button Clicked")} name='plus' size={26} color="#000"/>
                    <Icon onPress={() => alert(" Heart Button Clicked")} name='hearto' size={26} color="#000"/>
                    <Icon onPress={() => nav.navigate('Feed')} name='inbox' size={26} color="#000"/>

                </View>
            </View>

            <View style={styles.storyBar} >
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Stories pic={`https://source.unsplash.com/random/300x200?sig=${Math.floor(Math.random() * 90)}`} username={user==="" ? "james" : user} />
                    <Stories pic={`https://source.unsplash.com/random/300x200?sig=${Math.floor(Math.random() * 70)}`} username={user==="" ? "james" : user} />
                    <Stories pic={`https://source.unsplash.com/random/300x200?sig=${Math.floor(Math.random() * 20)}`} username={user==="" ? "james" : user} />
                    <Stories pic={`https://source.unsplash.com/random/300x200?sig=${Math.floor(Math.random() * 40)}`} username={user==="" ? "james" : user} />
                    <Stories pic={`https://source.unsplash.com/random/300x200?sig=${Math.floor(Math.random() * 60)}`} username={user==="" ? "james" : user} />
                    <Stories pic={`https://source.unsplash.com/random/300x200?sig=${Math.floor(Math.random() * 80)}`} username={user==="" ? "james" : user} />
                    <Stories pic={`https://source.unsplash.com/random/300x200?sig=${Math.floor(Math.random() * 10)}`} username={user==="" ? "james" : user} />
                    <Stories pic={`https://source.unsplash.com/random/300x200?sig=${Math.floor(Math.random() * 12)}`} username={user==="" ? "james" : user} />
                    <Stories pic={`https://source.unsplash.com/random/300x200?sig=${Math.floor(Math.random() * 12)}`} username={user==="" ? "james" : user} />
                    <Stories pic={`https://source.unsplash.com/random/300x200?sig=${Math.floor(Math.random() * 12)}`} username={user==="" ? "james" : user} />
                    <Stories pic={`https://source.unsplash.com/random/300x200?sig=${Math.floor(Math.random() * 12)}`} username={user==="" ? "james" : user} />
                    <Stories pic={`https://source.unsplash.com/random/300x200?sig=${Math.floor(Math.random() * 12)}`} username={user==="" ? "james" : user} />
                    <Stories pic={`https://source.unsplash.com/random/300x200?sig=${Math.floor(Math.random() * 12)}`} username={user==="" ? "james" : user} />
                    
                </ScrollView>
            </View>

            <View style={styles.postsFeed}>
                <ScrollView horizontal={false}>
                    <Post image={StoryImage} username="Fallon" postimage={`https://source.unsplash.com/random/300x200?sig=${Math.floor(Math.random() * 200)} * 10`} />
                    <Post image={StoryImage} username="Fallon" postimage={`https://source.unsplash.com/random/300x200?sig=${Math.floor(Math.random() * 200)} * 120`} />
                    <Post image={StoryImage} username="Fallon" postimage={`https://source.unsplash.com/random/300x200?sig=${Math.floor(Math.random() * 200)} * 20`} />
                    <Post image={StoryImage} username="Fallon" postimage={`https://source.unsplash.com/random/300x200?sig=${Math.floor(Math.random() * 200)} * 140`} />
                    <Post image={StoryImage} username="Fallon" postimage={`https://source.unsplash.com/random/300x200?sig=${Math.floor(Math.random() * 200)} * 0`} />              
                    <Post image={StoryImage} username="Fallon" postimage={`https://source.unsplash.com/random/300x200?sig=${Math.floor(Math.random() * 200)} * 9`} />              
                    <Post image={StoryImage} username="Fallon" postimage={`https://source.unsplash.com/random/300x200?sig=${Math.floor(Math.random() * 200)} * 1`} />              
                    <Post image={StoryImage} username="Fallon" postimage={`https://source.unsplash.com/random/300x200?sig=${Math.floor(Math.random() * 200)} * 120`} />
                    <Post image={StoryImage} username="Fallon" postimage={`https://source.unsplash.com/random/300x200?sig=${Math.floor(Math.random() * 200)} * 120`} />             
                    <Post image={StoryImage} username="Fallon" postimage={`https://source.unsplash.com/random/300x200?sig=${Math.floor(Math.random() * 200)} * 120`} />             
                    <Post image={StoryImage} username="Fallon" postimage={`https://source.unsplash.com/random/300x200?sig=${Math.floor(Math.random() * 200)} * 120`} />             
                    <Post image={StoryImage} username="Fallon" postimage={`https://source.unsplash.com/random/300x200?sig=${Math.floor(Math.random() * 200)} * 120`} />             
                    <Post image={StoryImage} username="Fallon" postimage={`https://source.unsplash.com/random/300x200?sig=${Math.floor(Math.random() * 200)} * 120`} />             
                    <Post image={StoryImage} username="Fallon" postimage={`https://source.unsplash.com/random/300x200?sig=${Math.floor(Math.random() * 200)} * 120`} />             
                    <Post image={StoryImage} username="Fallon" postimage={`https://source.unsplash.com/random/300x200?sig=${Math.floor(Math.random() * 200)} * 120`} />             
                    <Post image={StoryImage} username="Fallon" postimage={`https://source.unsplash.com/random/300x200?sig=${Math.floor(Math.random() * 200)} * 120`} />             
                    <Post image={StoryImage} username="Fallon" postimage={`https://source.unsplash.com/random/300x200?sig=${Math.floor(Math.random() * 200)} * 120`} />             
                    <Post image={StoryImage} username="Fallon" postimage={`https://source.unsplash.com/random/300x200?sig=${Math.floor(Math.random() * 200)} * 120`} />             
                    <Post image={StoryImage} username="Fallon" postimage={`https://source.unsplash.com/random/300x200?sig=${Math.floor(Math.random() * 200)} * 120`} />             

                </ScrollView>
            </View>
        
        </View>
    )
}

export default HomeScreen;


const styles = StyleSheet.create({
    homeContainer: {
        position:"relative",
        paddingTop: 50,
        paddingBottom: 300,
    },

    topBar: {
        flexDirection: "row",
        alignItems:"center",
        justifyContent: "space-between",
        height: 50,
    }, 

    topBarButtons: {
        flexDirection:"row",
        width: 150,
        justifyContent: "space-between"
    },

    storyBar: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingBottom: 10,
        borderBottomColor: "#999",
        borderBottomWidth: 0.2,        
    },


    logo: {
        fontSize: 20,
        fontWeight: "700"
    },

    postsFeed: {
        flexDirection: "row",
    }
})
