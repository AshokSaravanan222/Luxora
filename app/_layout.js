import { Tabs } from 'expo-router/tabs';
import { useMaterial3Theme } from '@pchmn/expo-material3-theme';
import { useColorScheme} from 'react-native';

import { Drawer } from 'expo-router/drawer';

import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
} from 'react-native-paper';
import { useFonts } from "expo-font";

import { COLORS } from '../constants';

//icons
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons, AntDesign, Feather} from '@expo/vector-icons'; 


//buttons
import { TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter, useNavigation} from 'expo-router';
import { DrawerToggleButton } from '@react-navigation/drawer';

export default function AppLayout() {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();

  const router = useRouter();

  const paperTheme =
    colorScheme === 'dark'
      ? { ...MD3DarkTheme, colors: theme.dark }
      : { ...MD3LightTheme, colors: theme.light };

  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <PaperProvider theme={paperTheme}>
      <Tabs screenOptions={{
        headerLeft: () => (
          <MaterialCommunityIcons
              name={'tools'}
              color={paperTheme.colors.primary}
              size={24}
              style={{padding: 10}}
              onPress={() => router.push('tools')}
            />
        ),
        headerRight: () => (
          <MaterialCommunityIcons
              name={'account'}
              color={paperTheme.colors.primary}
              size={24}
              style={{padding: 10}}
              onPress={() => router.push('about')}
            />
        ),
        headerTitle: "",
        headerStyle: { backgroundColor: paperTheme.colors.primaryContainer},
      }}
      >
      <Tabs.Screen
    // Name of the route to hide.
        name="index"
        options={{
          // This tab will no longer show up in the tab bar.
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
    // Name of the route to hide.
        name="learn"
        options={{
          // This tab will no longer show up in the tab bar.
          title: "Learn",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
    // Name of the route to hide.
    name="live"
    options={{
      // This tab will no longer show up in the tab bar.
      title: "Live",
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="run" size={size} color={color} />
      ),
    }}
  />
  <Tabs.Screen
    // Name of the route to hide.
    name="calendar"
    options={{
      // This tab will no longer show up in the tab bar.
      title: "Calendar",
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="calendar" size={size} color={color} />
      ),
    }}
  />
  <Tabs.Screen
    // Name of the route to hide.
    name="tools"
    options={{
      // This tab will no longer show up in the tab bar.
      href: null,
      title: "Tools",
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="tools" size={size} color={color} />
      ),
    }}
  />
  <Tabs.Screen
    // Name of the route to hide.
    name="about"
    options={{
      // This tab will no longer show up in the tab bar.
      href: null,
      title: "About Us",
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="account" size={size} color={color} />
      ),
    }}
  />

      </Tabs>

    </PaperProvider>
  );
}