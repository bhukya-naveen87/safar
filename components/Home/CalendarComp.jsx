import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { commonStyles } from '../../assets/Styles/constants';

const DateRangePickerModal = ({ selectedRange, setSelectedRange, finalRange, setFinalRange, isModalVisible, setModalVisible }) => {
    const toggleModal = () => {
        setModalVisible(!isModalVisible)
        setSelectedRange(finalRange)
    };

    const onDayPress = (day) => {
        if (!selectedRange.startDate || (selectedRange.startDate && selectedRange.endDate)) {
            // Start a new range selection
            setSelectedRange({ startDate: day.dateString, endDate: null });
        } else if (selectedRange.startDate && !selectedRange.endDate) {
            // Validate that the selected end date is after the start date
            if (new Date(day.dateString) < new Date(selectedRange.startDate)) {
                alert('End date cannot be before the start date. Please select a valid range.');
            } else {
                // End the range selection
                setSelectedRange((prev) => ({
                    ...prev,
                    endDate: day.dateString,
                }));
            }
        }
    };

    const getMarkedDates = () => {
        const { startDate, endDate } = selectedRange;
        const markedDates = {};

        if (startDate) {
            markedDates[startDate] = { startingDay: true, color: commonStyles.backgroundBlue, textColor: 'white' };
        }

        if (endDate) {
            markedDates[endDate] = { endingDay: true, color: commonStyles.backgroundBlue, textColor: 'white' };

            // Mark all dates between startDate and endDate
            let currentDate = new Date(startDate);
            while (currentDate <= new Date(endDate)) {
                const formattedDate = currentDate.toISOString().split('T')[0];
                if (formattedDate !== startDate && formattedDate !== endDate) {
                    markedDates[formattedDate] = { color: commonStyles.backgroundBlue, textColor: 'white' };
                }
                currentDate.setDate(currentDate.getDate() + 1);
            }
        }

        return markedDates;
    };

    const confirmSelection = () => {
        setFinalRange(selectedRange);
        toggleModal();
    };

    const clearSelection = () => {
        setSelectedRange({
            startDate: null,
            endDate: null,
        })
        setFinalRange({
            startDate: null,
            endDate: null,
        })
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.pressable} onPress={toggleModal}>
                <Text style={styles.pressableText}>
                    {finalRange.startDate && finalRange.endDate
                        ? `${finalRange.startDate} --> ${finalRange.endDate}`
                        : 'Select Date Range'}
                </Text>
            </Pressable>

            <Modal visible={isModalVisible} animationType="slide" transparent={true}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalHeader}>Select Date Range</Text>
                        <Calendar
                            markingType="period"
                            markedDates={getMarkedDates()}
                            onDayPress={onDayPress}
                            theme={{
                                selectedDayBackgroundColor: commonStyles.backgroundBlue,
                                todayTextColor: commonStyles.backgroundBlue,
                                arrowColor: commonStyles.backgroundBlue,
                            }}
                        />
                        <View style={styles.buttonContainer}>
                            <Button title="Confirm" color={commonStyles.backgroundBlue} onPress={confirmSelection} />
                            <Button title="Close" color="red" onPress={toggleModal} />
                            {/* {
                                selectedRange.startDate && selectedRange.endDate && <Button title="Clear" color="red" onPress={clearSelection} />
                            } */}
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    pressable: {
        padding: 15,
        backgroundColor: "transparent",
        borderRadius: 8,
    },
    pressableText: {
        color: commonStyles.backgroundBlue,
        fontSize: 16,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        margin: 20,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 5,
    },
    modalHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    buttonContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

export default DateRangePickerModal;
