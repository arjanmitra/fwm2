import { Image, StyleSheet, Platform, Dimensions } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ScrollView } from 'react-native';
import GenericButton from '../components/buttons/GenericButton';
import { TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import workoutData from '../../constants/data/workoutData.json'

const { width, height } = Dimensions.get('window')

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type='title' style={styles.titleText}>Let's get to it.</ThemedText>
      </ThemedView>

      <View style={styles.addButtonsContainer}>
        <GenericButton onPress={() => console.log('hello')} title={'Add Workout'} width={width / 2 - 20} />
        <GenericButton onPress={() => console.log('hello')} title={'Add Run'} width={width / 2 - 20} />
        <GenericButton onPress={() => console.log('hello')} title={'Food Log'} width={width - 20} />
      </View>

      {/* workout data */}
      <View>

        <ThemedView style={styles.titleContainer}>
          <ThemedText type='default' style={styles.subSectionTitle}>Recent Activity</ThemedText>
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

    </ScrollView>
  );
}

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
    fontWeight: 300
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
    backgroundColor: '#6082B6',
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