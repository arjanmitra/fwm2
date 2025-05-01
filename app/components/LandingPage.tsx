import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';


const LandingPage = ({ onContinue }: { onContinue: () => void }) => (
    <View style={styles.center}>
        <Text style={styles.title}>👋 Welcome to My App!</Text>
        <Text style={styles.subtitle}>This is your first time here.</Text>
        <Button title="Get Started" onPress={onContinue} />
    </View>
);

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
    },
});

export default LandingPage;