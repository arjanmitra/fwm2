import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DevResetTool() {
    const [status, setStatus] = useState('');

    const resetFirstLaunchFlag = async () => {
        try {
            await AsyncStorage.removeItem('hasLaunched');
            setStatus('✅ Flag reset');
        } catch (error) {
            setStatus('❌ Error resetting flag');
            console.error(error);
        }
    };

    if (!__DEV__) return null; // Hide in production builds

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Dev Tools</Text>
            <Button title="Reset First Launch Flag" onPress={resetFirstLaunchFlag} />
            {status ? <Text style={styles.status}>{status}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 10,
    },
    status: {
        marginTop: 10,
        color: 'green',
    },
});