import React, {useState} from "react";
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import FeedScreen from './component/FeedScreen';
import HomeScreen from './component/HomeScreen';
import HomeIcon  from 'react-native-vector-icons/Feather';
import Profile from './component/Profile';
import Inbox from './component/Inbox';
import Search from './component/Search';
import { AuthContext } from './component/context';
import Login from './component/Login';
import Setting from "./component/Setting";

/**
 * Used to create a bottom tab navigation
 */
const Tab = createBottomTabNavigator();

/**
 * Creates the Stack Navigation
 */
const Stack = createStackNavigator();


export default function App() {
  /**
   * used as value props for context api on the auth wapper
   */
  const [hasUser, setUser] = useState(false); 
  const [user, setTextUsername] = useState("");


  /**
   * Used this for nested navigation with Stack and bottom tabs. 
   * The headerShown option toggles between true and false to show the page header
   * The function holds a stack ofnavigations controlled by buttons in the settings page
   * @returns none
   */
  const RootStack = () => {
    return <Stack.Navigator 
      screenOptions={{
        headerShown: true
      }}
    >
      <Stack.Screen options={{headerShown: false}} name="SettingsPage"  component={Setting}/>
      <Stack.Screen name="Notifications" component={FeedScreen} />
      <Stack.Screen name="Privacy" component={FeedScreen} />
      <Stack.Screen name="Security" component={FeedScreen} />
      <Stack.Screen name="Account" component={FeedScreen} />
      <Stack.Screen name="Help" component={FeedScreen} />
      <Stack.Screen name="About" component={FeedScreen} />
      </Stack.Navigator>
  }

  return (
    <AuthContext.Provider value={{user, setTextUsername, hasUser, setUser}}>
    <NavigationContainer>

      {!hasUser ?
        <Stack.Navigator>
          <Stack.Screen name='Login' component={Login} />
        </Stack.Navigator>
        :
      
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused 
                ? 'home':'home'
            }else if(route.name === "Shop") {
              iconName = focused ? 'shopping-bag':'shopping-bag'
            }else if(route.name === "Search") {
              iconName = focused ? 'search':'search'
            }else if(route.name === "Account") {
              iconName = focused ? 'user':'user'
            }else if(route.name === "Feed") {
              iconName = focused ? 'rss':'rss'
            }else if(route.name === "Setting") {
              iconName = focused ? 'settings':'settings'
            }

            return <HomeIcon name={iconName} size={size} color={color} />
          },
        })}
      >
        
        <Tab.Screen options={{headerShown: false}} name='Home' component={HomeScreen} />
        <Tab.Screen options={{headerShown: false}} name='Search' component={Search}  />
        <Tab.Screen options={{headerShown: false}} name='Account' component={Profile}  />
        <Tab.Screen name='Setting' component={RootStack}  />
      
      </Tab.Navigator>
      }
    </NavigationContainer>
    </AuthContext.Provider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
