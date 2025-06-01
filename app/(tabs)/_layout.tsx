import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { View } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import HeaderProfile from '../components/header/HeaderProfile';
import HeaderNotifications from '../components/header/HeaderNotifications';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: true,
        headerTitle: 'fitWithMit',
        headerTitleStyle: {
          color: 'white'
        },
        headerStyle: {
          backgroundColor: "#36454F",
        },
        tabBarButton: HapticTab,
        // tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            // position: 'absolute',
            backgroundColor: "#36454F",
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
          headerLeft: () => <HeaderProfile />,
          headerRight: () => <HeaderNotifications />,
          headerTitle: 'Home'
        }}
      />
      <Tabs.Screen
        name="workouts/index"
        options={{
          title: 'Workouts',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="dumbbell.fill" color={color} />,
          headerLeft: () => <HeaderProfile />,
          headerRight: () => <HeaderNotifications />,
          headerTitle: 'Workouts'
        }}
      />
      {/* <Tabs.Screen
        name="smartLog/index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <View style={{ marginTop: 10 }}><IconSymbol size={35} name="dot.circle" color={'red'} /></View>,
        }}

      />
      <Tabs.Screen
        name="runs/index"
        options={{
          title: 'Runs',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="figure.run" color={color} />,
        }}
      /> */}
      <Tabs.Screen
        name="foodLog/index"
        options={{
          title: 'Food Log',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="fork.knife.circle" color={color} />,
        }}
      />
    </Tabs>
  );
}
