import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { IconSymbol } from "@/components/ui/IconSymbol";

const HeaderNotifications = () => {
    return (
        <Link href="/" asChild>
            <TouchableOpacity style={{ marginRight: 10, padding: 8, marginBottom: 16 }}>
                <IconSymbol name="bell.fill" size={24} color="white" />
            </TouchableOpacity>
        </Link>
    )
}

export default HeaderNotifications;

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