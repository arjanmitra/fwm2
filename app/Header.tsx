import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useSegments } from 'expo-router';
import { Link } from 'expo-router';
import { Stack } from 'expo-router';

const Header = () => {
    const segments = useSegments(); // returns an array like ['(tabs)', 'home']

    const getTitle = () => {
        const current = segments[segments.length - 1];
        switch (current) {
            case 'workouts':
                return 'Workouts';
            case 'smartLog':
                return '';
            case 'runs':
                return 'Runs';
            case 'foodLog':
                return 'Food Log';
            default:
                return 'Home';
        }
    };
    return (
        <>
            <View style={styles.container}>
                <Link href="/components/ProfilePage" asChild>
                    <TouchableOpacity>
                        <Image
                            source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} // Replace with user's image
                            style={styles.avatar}
                        />
                    </TouchableOpacity>
                </Link>

                <Text style={styles.title}>{getTitle()}</Text>

                {/* Notification bell */}
                <TouchableOpacity>
                    <IconSymbol name="bell.fill" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </>

    );
};

export default Header;

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