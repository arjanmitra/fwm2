import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import App from './App';
import Header from './Header';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Dimensions } from 'react-native';
import { AuthProvider } from './context/AuthContext';

SplashScreen.preventAutoHideAsync();

const { width, height } = Dimensions.get('window')

export default function RootLayout() {

  const colorScheme = useColorScheme();

  return (
    <AuthProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        {/* <Header /> */}
        <App screenWidth={width} screenHeight={height} />
      </ThemeProvider>
    </AuthProvider>
  );
}
