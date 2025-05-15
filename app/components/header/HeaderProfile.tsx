import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { Link } from "expo-router";

const HeaderProfile = () => {
    return (
        <Link href="/components/ProfilePage" asChild >
            <TouchableOpacity style={{ marginLeft: 10, padding: 8, marginBottom: 16 }}>
                <Image
                    source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} // Replace with user's image
                    style={styles.avatar}
                />
            </TouchableOpacity>
        </Link>
    )
}

export default HeaderProfile;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50, // for status bar spacing
        paddingHorizontal: 20,
        paddingBottom: 10,
        backgroundColor: '#36454F',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 3, // Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
    },
});