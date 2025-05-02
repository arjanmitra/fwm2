import React, { useRef } from 'react';
import {
    Animated,
    ScrollView,
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    Pressable,
} from 'react-native';

const { height, width } = Dimensions.get('window');

const slides = [
    {
        key: 'run',
        title: 'Track your runs',
        image: require('../../assets/images/running.jpg'), // Replace with Lottie or static asset
    },
    {
        key: 'lift',
        title: 'Log your lifts',
        image: require('../../assets/images/lifting.jpg'),
    },
    {
        key: 'track',
        title: 'Monitor your progress',
        image: require('../../assets/images/checkingPhone.jpg'),
    },
];

export default function LandingScreen({ onFinish }: { onFinish: () => void }) {
    const scrollY = useRef(new Animated.Value(0)).current;

    return (
        <View style={{ flex: 1 }}>
            {/* Parallax background */}
            <Animated.View
                style={[
                    styles.parallaxBackground,
                    {
                        transform: [
                            {
                                translateY: scrollY.interpolate({
                                    inputRange: [0, height * slides.length],
                                    outputRange: [0, -height * slides.length], // Slower scroll
                                    extrapolate: 'clamp',
                                }),
                            },
                        ],
                    },
                    {
                        flex: 1,
                        backgroundColor: '#fff',
                        justifyContent: 'flex-start', // center vertically
                        alignItems: 'center',     // center horizontally
                    }
                ]}
            >
                {slides.map((slide, i) => {
                    return <Image key={i} source={slide.image} resizeMode='contain' style={{ width: width * 0.95, height: height, aspectRatio: 16 / 9 }} />
                })}

                <View style={styles.backgroundColorLayer} />
            </Animated.View>

            {/* Foreground content */}
            <Animated.ScrollView
                pagingEnabled
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true }
                )}
            >
                {slides.map((slide) => (
                    <View style={styles.slide} key={slide.key}>
                        <Text style={styles.title}>{slide.title}</Text>
                        {/* <Image source={slide.image} style={styles.image} resizeMode="contain" /> */}
                    </View>
                ))}

                {/* Final screen */}
                <View style={styles.slide}>
                    <Text style={styles.title}>Ready to begin?</Text>
                    <Pressable style={styles.button} onPress={onFinish}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </Pressable>
                </View>
            </Animated.ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    parallaxBackground: {
        ...StyleSheet.absoluteFillObject,
        zIndex: -1,
    },
    backgroundColorLayer: {
        flex: 1,
        backgroundColor: '#d0f0f7', // Light blue for running theme
    },
    slide: {
        height,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    title: {
        fontSize: 40,
        fontWeight: '700',
        textAlign: 'center',
        verticalAlign: 'top',
        marginBottom: 30,
        color: 'white'
    },
    image: {
        width: '80%',
        height: 300,
    },
    button: {
        marginTop: 40,
        backgroundColor: 'purple',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 25,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});