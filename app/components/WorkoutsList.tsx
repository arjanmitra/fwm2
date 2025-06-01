import React from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native';

import workouts from '../../constants/data/workoutsListData.json';
import { Link } from 'expo-router';

const WorkoutScreen = () => {
    const renderItem = ({ item }: { item: { id: string; title: string } }) => (
        // <TouchableOpacity>
        <Link href="/components/AddWorkout" asChild style={[
            styles.button,
            item.id === 'custom' && styles.customButton,
        ]}>
            <TouchableOpacity>
                <Text style={styles.buttonText}>{item.title}</Text>
            </TouchableOpacity>

        </Link>
        // </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={workouts}
                style={styles.list}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingVertical: 16 }}
            />
        </View>
    );
};

export default WorkoutScreen;

const styles = StyleSheet.create({
    container: {
        paddingTop: 0,
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: 'black',
    },
    list: {
        padding: 20,

    },
    button: {
        width: '100%',
        backgroundColor: '#00657A',
        paddingVertical: 18,
        paddingHorizontal: 16,
        borderRadius: 12,
        marginBottom: 12,
        textAlign: 'center',
        elevation: 2,
    },
    customButton: {
        backgroundColor: '#4CAF50', // green for "Add Custom Workout"
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: '600',
        textAlign: 'center'
    },
});