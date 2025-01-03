import { Button, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeHeader from './Home/HomeHeader';
import Feather from '@expo/vector-icons/Feather';
import DateRangePicker from './Home/CalendarComp';
import { commonStyles } from '../assets/Styles/constants';
import { BottomModal, ModalButton, ModalContent, ModalFooter, ModalTitle, SlideAnimation } from 'react-native-modals';


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
  const [isCalendarModalVisible, setCalendarModalVisible] = useState(false);
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
    <>
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
                placeholderTextColor={commonStyles.backgroundBlue}
              />
            </Pressable>

            {/* Selected Dates */}
            <Pressable style={styles.pressableStyle} onPress={() => setCalendarModalVisible(true)}>
              <Feather name="calendar" size={24} color="black" />
              <DateRangePicker
                selectedRange={selectedRange}
                setSelectedRange={setSelectedRange}
                finalRange={finalRange}
                setFinalRange={setFinalRange}
                isCalendarModalVisible={isCalendarModalVisible}
                setCalendarModalVisible={setCalendarModalVisible}
              />
            </Pressable>

            {/* Rooms and Guests */}
            <Pressable style={styles.pressableStyle} 
            onPress={() => setModalVisible(!isModalVisible)}
            >
              <Ionicons name="person-outline" size={24} color="black" />
              <TextInput
                style={styles.placeholderStyling}
                placeholder='1 room . 2 adults . 0 children'
                underlineColorAndroid="transparent"
                placeholderTextColor={commonStyles.backgroundBlue}
              />
            </Pressable>

            {/* Search Button */}
            <Pressable style={styles.searchStyling} >
              <Text style={{ textAlign: 'center', fontSize: 15, color: "white", fontWeight: "bold", textAlignVertical: "center" }}>Search</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>

      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setModalVisible(!isModalVisible)}
        swipeDirection={["up", "down"]}
        footer={<ModalFooter>
          <ModalButton text='Apply' style={{ marginBottom: 20, color: "white", backgroundColor: commonStyles.backgroundBlue }} onPress={() => setModalVisible(!isModalVisible)} />
        </ModalFooter>}
        modalTitle={<ModalTitle title='Select Rooms and Guests' />}
        modalAnimation={new SlideAnimation({
          slideFrom: "bottom"
        })}
        onHardwareBackPress={() => setModalVisible(!isModalVisible)}
        visible={isModalVisible}
        onTouchOutside={() => setModalVisible(!isModalVisible)}
      >
        <ModalContent style={{width: "100%", height: 310}}>
            <View>
              <Text>Modal Content</Text>
            </View>
        </ModalContent>
      </BottomModal>
    </>
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
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 11,
    borderWidth: 0,
    width: "auto",
    borderColor: "transparent",
    borderWidth: 0,
    padding: 5,
    outlineStyle: "none",
    width: "100%",
  },
  searchStyling: {
    backgroundColor: commonStyles.backgroundBlue,
    paddingHorizontal: 10,
    borderColor: "#2a52be",
    borderWidth: 2,
    paddingVertical: 15
  }
})