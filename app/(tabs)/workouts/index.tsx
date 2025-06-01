import React from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    ScrollView
} from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import GenericButton from '@/app/components/buttons/GenericButton';

import workoutData from '../../../constants/data/workoutData.json'
import { Link } from 'expo-router';
import { useAuth } from '@/app/context/AuthContext';

const { width, height } = Dimensions.get('window')

const WorkoutScreen = () => {

    const { user, loading } = useAuth();

    if (loading) return <ThemedText>Loading...</ThemedText>

    return (
        <ScrollView style={styles.container}>
            {user ?
                <View>
                    <ThemedView style={styles.titleContainer}>
                        {/* <ThemedText type='title' style={styles.titleText}></ThemedText> */}
                    </ThemedView>

                    <View style={styles.addButtonsContainer}>
                        <GenericButton onPress={() => console.log('hello')} title={'Add Workout'} bgColor={'#007A52'} width={width - 20} />
                    </View>

                    {/* workout data */}
                    <View>

                        <ThemedView style={styles.titleContainer}>
                            <ThemedText type='default' style={styles.subSectionTitle}>Recent Workouts</ThemedText>
                        </ThemedView>

                        {workoutData.map((w, i) => {
                            return (
                                <TouchableOpacity key={i} style={styles.workoutContainer}>
                                    <ThemedText type='defaultSemiBold' style={{ marginLeft: 20, margin: 2 }}>{w.title}</ThemedText>
                                    <ThemedText style={{ marginLeft: 20, margin: 2 }}>Duration: {w.duration} mins.</ThemedText>
                                    <ThemedText style={{ marginLeft: 20, margin: 2 }}>Date: {w.date}</ThemedText>
                                </TouchableOpacity>
                            )
                        })}

                    </View>
                </View> :
                <ThemedText>
                    Please sign in.
                </ThemedText>}



        </ScrollView>
    );
};

export default WorkoutScreen;

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