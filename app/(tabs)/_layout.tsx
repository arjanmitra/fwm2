import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { View } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="workout"
        options={{
          title: 'Workouts',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="dumbbell.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="smartLog"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <View style={{ marginTop: 10 }}><IconSymbol size={35} name="dot.circle" color={'red'} /></View>,
        }}

      />
      <Tabs.Screen
        name="run"
        options={{
          title: 'Runs',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="figure.run" color={color} />,
        }}
      />
      <Tabs.Screen
        name="eat"
        options={{
          title: 'Food Log',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="fork.knife.circle" color={color} />,
        }}
      />
    </Tabs>
  );
}
