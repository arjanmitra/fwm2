import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from './context/AuthContext';

import LoginModal from './components/LoginModal';
import DevResetTool from '@/components/DevResetTool';
import LandingPage from './components/LandingPage';

interface AppProps {
    screenWidth: number
    screenHeight: number
}


SplashScreen.preventAutoHideAsync();

export default function App({ screenWidth, screenHeight }: AppProps) {
    const { user, loading } = useAuth();
    const [initializing, setInitializing] = useState(true);
    const [firstLaunch, setFirstLaunch] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [showModal, setShowModal] = useState(!isSignedIn);

    const [loaded] = useFonts({
        Raleway: require('../assets/fonts/Raleway-VariableFont_wght.ttf'),
    });

    useEffect(() => {
        const checkFirstLaunch = async () => {
            try {
                const hasLaunched = await AsyncStorage.getItem('hasLaunched');
                if (hasLaunched === null) {
                    setFirstLaunch(true);
                }
            } finally {
                setInitializing(false);
            }
        };
        checkFirstLaunch();
    }, []);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    const handleContinue = async () => {
        await AsyncStorage.setItem('hasLaunched', 'true');
        setFirstLaunch(false);
    };

    if (initializing) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    const handleLogin = (email: string, password: string) => {
        // Replace with real authentication logic
        if (email && password) {
            setIsSignedIn(true);
            setShowModal(false);
        }
    };

    return (<>
        {firstLaunch && user ?
            <LandingPage onFinish={handleContinue} /> :
            <LoginModal
                visible={showModal}
                onClose={() => setShowModal(false)}
                onLogin={handleLogin}
            />}
        {!firstLaunch ? <><Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
        </Stack>
            <StatusBar style="auto" />
            {/* <DevResetTool /> */}
        </>
            : <></>
        }
    </>
    );
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
});
