import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';

import HomeScreen from './components/HomeScreen';
import SavedScreen from './components/SavedScreen'
import BookingScreen from './components/BookingScreen'
import ProfileScreen from './components/ProfileScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const BottomTabs = () => {
        return (
            <Tab.Navigator>
                {/* Home */}
                <Tab.Screen name='Home' component={HomeScreen} options={{
                    topBarLabel: "Home", headerShown: false, tabBarIcon: ({ focused }) => focused ? (<Entypo name="home" size={24} color="#003580" />) : (
                        <AntDesign name="home" size={24} color="black" />
                    )
                }} />
                {/* Home */}

                {/* Saved */}
                <Tab.Screen name='Saved' component={SavedScreen} options={{
                    topBarLabel: "Saved", headerShown: false, tabBarIcon: ({ focused }) => focused ? (<AntDesign name="heart" size={24} color="#003580" />) : (
                        <AntDesign name="hearto" size={24} color="black" />
                    )
                }} />
                {/* Saved */}

                {/* Booking */}
                <Tab.Screen name='Bookings' component={BookingScreen} options={{
                    topBarLabel: "Bookings", headerShown: false, tabBarIcon: ({ focused }) => focused ? (<Ionicons name="notifications-circle" size={24} color="#003580" />) : (
                        <Ionicons name="notifications-circle-outline" size={24} color="black" />
                    )
                }} />
                {/* Booking */}

                {/* Profile */}
                <Tab.Screen name='Profile' component={ProfileScreen} options={{
                    topBarLabel: "Profile", headerShown: false, tabBarIcon: ({ focused }) => focused ? (<Ionicons name="person" size={24} color="#003580" />) : (
                        <Ionicons name="person-outline" size={24} color="black" />
                    )
                }} />
                {/* Home */}
            </Tab.Navigator>
        )
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Main' component={BottomTabs} options={{ headerShown: false, headerTitleAlign: "center"}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}



export default StackNavigator

const styles = StyleSheet.create({})