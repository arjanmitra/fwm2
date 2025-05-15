import { Image, StyleSheet, Platform, Dimensions } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ScrollView } from 'react-native';
import GenericButton from '../components/buttons/GenericButton';
import { TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { useAuth } from '../context/AuthContext';
import workoutData from '../../constants/data/workoutData.json'

const { width, height } = Dimensions.get('window')

export default function HomeScreen() {
  const { user, loading } = useAuth();

  console.log(user, loading)

  if (loading) return <ThemedText>Loading...</ThemedText>

  return (
    <ScrollView style={styles.container}>
      {user ?
        <View>
          <ThemedView style={styles.titleContainer}>
            <ThemedText type='title' style={styles.titleText}>Welcome back.</ThemedText>
          </ThemedView>

          <View style={styles.addButtonsContainer}>
            <GenericButton onPress={() => console.log('hello')} title={'Add Workout'} bgColor={'#007A52'} width={width / 2 - 20} />
            <GenericButton onPress={() => console.log('hello')} title={'Add Run'} bgColor={'#007A52'} width={width / 2 - 20} />
            <GenericButton onPress={() => console.log('hello')} title={'Food Log'} bgColor={'#00657A'} width={width - 20} />
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
        </View> :
        <ThemedText>
          Please sign in.
        </ThemedText>}



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