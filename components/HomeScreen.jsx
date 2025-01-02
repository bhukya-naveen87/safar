import { Button, Pressable, ScrollView, StyleSheet, TextInput, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeHeader from './Home/HomeHeader';
import Feather from '@expo/vector-icons/Feather';
import DateRangePicker from './Home/CalendarComp';
import { commonStyles } from '../assets/Styles/constants';


const HomeScreen = () => {
  const navigation = useNavigation();
  // const [selectedDates, setSelectedDates] = useState("")
  const [selectedRange, setSelectedRange] = useState({
    startDate: null,
    endDate: null,
  });
  const [finalRange, setFinalRange] = useState({
    startDate: null,
    endDate: null,
  });
  const [isModalVisible, setModalVisible] = useState(false);
  // useEffect(()=>{
  //   console.log(selectedRange)
  //   console.log(finalRange)
  // },[selectedRange])
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Home",
      headerTitle: "Booking.com",
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent"
      },
      headerRight: () => <Ionicons name="notifications-circle-outline" size={24} color="white" style={styles.notificationStyle} />
    })
  })

  const customButtom = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        style={{ container: { width: '80%', marginHorizontal: '3%' }, text: { fontSize: 20 } }}
        primary
        title='Submit'
      />
    )
  }
  return (
    <View>
      <HomeHeader />
      <ScrollView>
        <View style={styles.viewContainer}>
          {/* Destination */}
          <Pressable style={styles.pressableStyle}>
            <Feather name="search" size={24} color="black" />
            <TextInput 
              style={styles.placeholderStyling} 
              placeholder='Enter your Destination' 
              underlineColorAndroid="transparent"
            />
          </Pressable>

          {/* Selected Dates */}
          <Pressable style={styles.pressableStyle} onPress={()=> setModalVisible(true)}>
            <Feather name="calendar" size={24} color="black" />
            <DateRangePicker 
              selectedRange={selectedRange} 
              setSelectedRange={setSelectedRange} 
              finalRange={finalRange} 
              setFinalRange={setFinalRange}
              isModalVisible={isModalVisible}
              setModalVisible={setModalVisible}
            />
          </Pressable>

          {/* Rooms and Guests */}
          <Pressable style={styles.pressableStyle} >
          <Ionicons name="person-outline" size={24} color="black" />
          <TextInput 
              style={styles.placeholderStyling} 
              placeholder='1 room . 2 adults . 0 children' 
              underlineColorAndroid="transparent"
            />
          </Pressable>

          {/* Search Button */}
          <Pressable>

          </Pressable>
        </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  notificationStyle: {
    marginRight: 12
  },
  viewContainer: {
    margin: 20,
    borderColor: "#FFC72C",
    borderWidth: 3,
    borderRadius: 6
  },
  pressableStyle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10,
    borderColor: "#FFC72C",
    borderWidth: 2,
    paddingVertical: 15,
    height: 30,
  },
  dateText: {
    fontSize: 15,
    flexDirection: "row",
    alignItems: "center",
    marginRight: "auto"
  },
  dataSelectedContainer: {
    width: 350,
    height: 30,
    borderRadius: 0,
    borderColor: "transparent"
  },
  placeholderStyling: {
    color: commonStyles.backgroundBlue,
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 15,
    borderWidth: 0,
    width: "auto",
    borderColor: "transparent",
    borderWidth: 0,
    padding: 5
  }
})