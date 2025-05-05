import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const workouts = [
  { id: 'custom', title: 'Add Custom Workout' },
  { id: '1', title: 'Bench Press' },
  { id: '2', title: 'Pec Fly' },
  { id: '3', title: 'Squat' },
  { id: '4', title: 'Deadlift' },
  { id: '5', title: 'Overhead Press' },
  { id: '6', title: 'Barbell Row' },
  // add more here...
];

const WorkoutScreen = () => {
  const renderItem = ({ item }: { item: { id: string; title: string } }) => (
    <TouchableOpacity
      style={[
        styles.button,
        item.id === 'custom' && styles.customButton,
      ]}
      onPress={() => console.log('Pressed:', item.title)}
    >
      <Text style={styles.buttonText}>{item.title}</Text>
    </TouchableOpacity>
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
    paddingTop: 100,
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  list: {
    padding: 20
  },
  button: {
    width: '100%',
    backgroundColor: '#f2f2f2',
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  customButton: {
    backgroundColor: '#4CAF50', // green for "Add Custom Workout"
  },
  buttonText: {
    fontSize: 18,
    color: '#333',
    fontWeight: '600',
  },
});