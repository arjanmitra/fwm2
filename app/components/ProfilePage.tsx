import { ThemedText } from "@/components/ThemedText";
import React from "react";
import { Stack } from "expo-router";
import { TouchableOpacity, View, Text, StyleSheet, ScrollView } from "react-native";
import GenericButton from "./buttons/GenericButton";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";

const ProfilePage = () => {

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                console.log('user signed out')
            })
            .catch(() => {
                console.log('error signing user out')
            })
    }
    return (
        <>
            <Stack.Screen options={{ title: "Profile", headerBackButtonDisplayMode: "minimal" }} />
            <ScrollView style={styles.container}>
                <GenericButton title={'Logout'} onPress={() => handleLogout()} width={100} bgColor="#00657A" />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        display: 'flex'
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        color: 'white',
        backgroundColor: 'black',
        margin: 15
    },
    titleText: {
        color: 'white',
        fontWeight: 300,
        marginTop: 10
    },
    subSectionTitle: {
        color: 'white',
        fontWeight: 600,
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    addButtonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        // backgroundColor: '#FF5733',
        backgroundColor: 'black',
        borderRadius: 20,
    },
    workoutContainer: {
        backgroundColor: '#353839',
        borderRadius: 20,
        color: 'white',
        margin: 10
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },

});

export default ProfilePage;