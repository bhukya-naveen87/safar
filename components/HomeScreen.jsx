import { Button, Pressable, ScrollView, StyleSheet, TextInput, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeHeader from './Home/HomeHeader';
import Feather from '@expo/vector-icons/Feather';
import DatePicker from 'react-native-date-ranges';
import DateRangePicker from './Home/CalendarComp';


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
            <TextInput placeholder='Enter your Destination' />
          </Pressable>

          {/* Selected Dates */}
          <Pressable style={styles.pressableStyle}>
            <Feather name="calendar" size={24} color="black" />
            <DateRangePicker 
              selectedRange={selectedRange} 
              setSelectedRange={setSelectedRange} 
              finalRange={finalRange} 
              setFinalRange={setFinalRange}
            />
          </Pressable>

          {/* Rooms and Guests */}
          <Pressable>

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
    paddingRight: 15
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
  }
})

const NewPicker = (props) => {
  const pickerRef = useRef(null);

  const customButton = (onConfirm) => (
    <Button
      onPress={onConfirm}
      style={{ container: { width: '80%', marginHorizontal: '3%' }, text: { fontSize: 20 } }}
      primary
      text={'Submit'}
      title='Submit'
    />
  );

  return (
    <DatePicker
      ref={pickerRef}
      {...props}
      customButton={customButton}
    />
  );
};