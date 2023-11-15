import { Tabs } from 'expo-router/tabs';
import { Drawer } from 'expo-router/drawer';
import { Stack, useRouter, Slot} from 'expo-router';

import { useMaterial3Theme } from '@pchmn/expo-material3-theme';
import {
  MD3DarkTheme,
  MD3LightTheme,
} from 'react-native-paper';
import { useColorScheme} from 'react-native';

import { MaterialCommunityIcons, AntDesign, Feather} from '@expo/vector-icons'; 
import { COLORS } from '../../constants';

export default function LearnLayout() {
  return <Slot></Slot>
}