import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { commonStyles } from '../../assets/Styles/constants'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const HomeHeader = () => {
    const [headerActive, setHeaderActive] = useState("stays")

    const handlePressable = (headerType) => {
        setHeaderActive(headerType)
    }

    const addExtraStyling = (headerType) => {
        if (headerActive === headerType) return styles.buttonSelected
        return {}
    }
    return (
        <View style={styles.header}>
            <Pressable style={[styles.buttonStyling, addExtraStyling("stays")]} onPress={() => handlePressable("stays")}>
                <Ionicons name="bed-outline" size={26} color="white" />
                <Text style={styles.buttonText}>Stays</Text>
            </Pressable>
            <Pressable style={[styles.buttonStyling, addExtraStyling("flights")]} onPress={() => handlePressable("flights")}>
                <Ionicons name="airplane-outline" size={26} color="white" />
                <Text style={styles.buttonText}>Flights</Text>
            </Pressable>
            <Pressable style={[styles.buttonStyling, addExtraStyling("rentals")]} onPress={() => handlePressable("rentals")}>
                <Ionicons name="car-outline" size={26} color="white" />
                <Text style={styles.buttonText}>Car Rental</Text>
            </Pressable>
            <Pressable style={[styles.buttonStyling, addExtraStyling("taxi")]} onPress={() => handlePressable("taxi")}>
                <FontAwesome5 name="taxi" size={26} color="white" />
                <Text style={styles.buttonText}>Taxi</Text>
            </Pressable>
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    header: {
        backgroundColor: commonStyles.backgroundBlue,
        height: 65,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    buttonStyling: {
        flexDirection: "row",
        alignItems: "center",
        padding: 8
    },
    buttonText: {
        marginLeft: 8,
        fontWeight: "bold",
        color: "white",
        fontSize: 15
    },
    buttonSelected: {
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 25,
    }
})